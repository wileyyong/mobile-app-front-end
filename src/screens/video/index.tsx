import { Activities, Pozzles } from '$api';
import {
  BinIcon,
  Button,
  CosmicBackground,
  HStack,
  OptionsIcon,
  PledgeRainbowIcon,
  PlusIcon,
  ReportIcon,
  ShareIcon,
  Text,
  Toast,
  VStack,
} from '$components';
import { Colors } from '$theme';
import { VideoFeed } from '$widgets';

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Share,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import styles from './style';
import { POZZLE_ACTIVITY_SCREEN, POZZLE_ACTIVITY_TAB_SCREEN } from '$constants';
import { cacheVideo } from 'src/shared/components/video/video-view/cache-videos';

import PledgeSheet from './pledge-sheet';
import { verbsItems } from '../pozzle-activity/activity-selection/utils';
import { useDispatch } from 'react-redux';
import { updateActivity } from '../../redux/progress-button/actions';

/**
 *
 *
 */
const VideoScreen = ({ route }) => {
  const { item } = route.params;
  const [loadDataFromNavigation, setDataFromNavigation] = useState<boolean>();
  const [page, setPage] = useState(1);
  const [verbIndex, setVerbIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [hasData, setHasData] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const [showPledgeSheet, setShowPledgeSheet] = useState(false);
  const [videos, setVideos] = useState<any>([]);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const launchAddPozzleScreen = () => {
    dispatch(updateActivity(null, false));
    navigation.navigate(POZZLE_ACTIVITY_SCREEN, {
      title: item.title,
      _id: item._id,
      pozzleCount: item.POZpledged,
      location: item.location,
      newActivity: false,
    });
  };
  const { width } = useWindowDimensions();

  const processData = async _videos => {
    if (_videos.data) {
      _videos.data = await setupCache(_videos.data, false);
    } else {
      _videos.data = await setupCache(_videos.pozzles, true);
    }

    setVideos([...videos, ..._videos.data]);
    setHasData(true);
    setPage(page + 1);

    if (_videos.data && _videos.data.length <= 0) {
      if (item) setDataFromNavigation(false);
      if (verbIndex + 1 >= verbsItems.length) {
        setNoMoreData(true);
      } else {
        const newIndex = verbIndex + 1;
        setVerbIndex(newIndex);
        setPage(1);
      }
    }
  };

  const getVideos = async () => {
    if (noMoreData) return;
    await Activities.get({
      title: verbsItems[verbIndex],
      page: page,
    }).then(
      async (_videos: any) => {
        await processData(_videos);
      },
      err => {
        setHasData(false);
      },
    );
  };

  const setupCache = async (_videosData: any, isFromNavigation: boolean) => {
    await _videosData.forEach(async video => {
      if (isFromNavigation) {
        if (!video.cachedSrc)
          video.cachedSrc = await cacheVideo(video.videoSrc);
      } else {
        if (!video.cachedSrc)
          video.cachedSrc = await cacheVideo(video.pozzles[0].videoSrc);
      }
    });
    return _videosData;
  };

  useEffect(() => {
    if (!hasData) {
      if (item && loadDataFromNavigation === undefined) {
        setDataFromNavigation(true);
        processData(item);
      } else {
        getVideos();
      }
    }
  }, [hasData]);

  return (
    <>
      <CosmicBackground style={styles.backgroundImage}>
        <View style={[styles.container, { width }]}>
          <VideoFeed
            parentActivity={item}
            videos={videos}
            loadMore={getVideos}
            onPressBack={navigation.goBack}
            updateParentIndex={(index: number) => {
              setVideoIndex(index);
            }}
          />
          <HStack style={styles.buttonContainer}>
            <Button
              backgroundColor={Colors.LIGHT_PURPLE}
              disabled={false}
              size="90%"
              onPress={launchAddPozzleScreen}>
              <HStack>
                <PlusIcon
                  color={Colors.WHITE}
                  style={styles.buttonIcon}></PlusIcon>
                <Text size="sm" weight="bold" color={Colors.WHITE}>
                  {t('videoScreen.addPozzleText')}
                </Text>
              </HStack>
            </Button>
            <TouchableOpacity
              onPress={() => {
                setShowPledgeSheet(true);
              }}>
              <PledgeRainbowIcon width={28} height={28}></PledgeRainbowIcon>
            </TouchableOpacity>
          </HStack>
        </View>
      </CosmicBackground>

      <PledgeSheet
        title={videos[videoIndex] ? videos[videoIndex].title : ''}
        show={showPledgeSheet}
        activityId={videos[videoIndex] ? videos[videoIndex]._id : ''}
        onClose={() => setShowPledgeSheet(false)}
      />
    </>
  );
};

export default VideoScreen;

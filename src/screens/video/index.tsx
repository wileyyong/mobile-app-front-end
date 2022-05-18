import { Activities, Pozzles } from '$api';
import {
  BinIcon,
  Button,
  CosmicBackground,
  HexPlusIcon,
  HStack,
  ImageBackground,
  OptionsIcon,
  PledgeIcon,
  PlusIcon,
  ReportIcon,
  ShareIcon,
  Text,
} from '$components';
import { Colors } from '$theme';
import { VideoFeed } from '$widgets';

import React, { useEffect, useState } from 'react';
import {
  Image,
  Share,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { POZZLE_ACTIVITY_TAB_SCREEN } from '$constants';
import { cacheVideo } from 'src/shared/components/video/video-view/cache-videos';
import OptionsSheet from './options-sheet';
import PledgeSheet from './pledge-sheet';
import { useSelector } from 'react-redux';
import { useActionSheet } from '@expo/react-native-action-sheet';

/**
 *
 *
 */
const VideoScreen = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  const redux = useSelector((state: any) => state.generic);
  const [page, setPage] = useState(1);
  const [videoIndex, setVideoIndex] = useState(0);
  const [hasData, setHasData] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const [showOptsSheet, setShowOptsSheet] = useState(false);
  const [showPledgeSheet, setShowPledgeSheet] = useState(false);
  const [videos, setVideos] = useState<any>([]);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const launchAddPozzleScreen = () =>
    navigation.navigate(POZZLE_ACTIVITY_TAB_SCREEN);
  const { width } = useWindowDimensions();

  const getVideos = async () => {
    if (noMoreData) return;
    await Activities.get({
      page: page,
    }).then(
      async (_videos: any) => {
        if (_videos.data.length <= 0) setNoMoreData(true);

        _videos.data = await setupCache(_videos.data);
        setVideos([...videos, ..._videos.data]);
        setHasData(true);
        setPage(page + 1);
      },
      err => {
        setHasData(false);
      },
    );
  };

  const setupCache = async (_videosData: any) => {
    await _videosData.forEach(async video => {
      if (!video.cachedSrc)
        video.cachedSrc = await cacheVideo(video.pozzles[0].videoSrc);
    });
    return _videosData;
  };
  const sharePozzle = () => {
    // Revise Url
    Share.share({ title: videos[videoIndex].title, url: '' });
  };

  const reportPozzle = () => {
    Pozzles.reportPozzle(videos[videoIndex]._id);
  };

  const deletePozzle = () => {
    Pozzles.deletePozzle(videos[videoIndex]._id);
  };

  const openSheet = () => {
    console.log('openSheet');
    setShowOptsSheet(true);
    const options = [
      t('pozzleOptionsSheet.share'),
      t('pozzleOptionsSheet.report'),
      t('pozzleOptionsSheet.delete'),
      t('pozzleOptionsSheet.done'),
    ];
    const icons = [
      <ShareIcon height={20} color={Colors.DARK_PURPLE} />,
      <ReportIcon height={20} color={Colors.DARK_PURPLE} />,
      <BinIcon height={20} color={Colors.ORANGE} />,
    ];
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: 3,
        destructiveButtonIndex: 2,
        showSeparators: false,
        icons,
        containerStyle: styles.optsContainer,
        textStyle: styles.optsText,
        destructiveColor: Colors.ORANGE,
      },
      buttonIndex => {
        console.log('buttonIndex', buttonIndex);
        // Do something here depending on the button index selected
        switch (buttonIndex) {
          case 0:
            //share
            sharePozzle();
            break;
          case 1:
            //report
            reportPozzle();
            break;
          case 2:
            //delete
            deletePozzle();
            break;

          default:
            break;
        }
      },
    );
  };

  useEffect(() => {
    if (!hasData) {
      getVideos();
    }
    if (redux.showOptsSheet && !showOptsSheet) {
      openSheet();
    }
  }, [hasData, redux.showOptsSheet]);

  return (
    <>
      <CosmicBackground style={styles.backgroundImage}>
        <View style={[styles.container, { width }]}>
          <TouchableOpacity
            style={styles.optionsIcon}
            onPress={() => {
              openSheet();
            }}>
            <OptionsIcon size="large" color={Colors.WHITE} />
          </TouchableOpacity>
          <VideoFeed
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
              <View style={styles.button}>
                <PlusIcon color={Colors.WHITE}></PlusIcon>
                <Text size="xs" weight="bold" color={Colors.WHITE}>
                  {t('videoScreen.addPozzleText')}
                </Text>
              </View>
            </Button>
            <TouchableOpacity
              onPress={() => {
                setShowPledgeSheet(true);
              }}>
              <PledgeIcon color={Colors.WHITE}></PledgeIcon>
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

/*   <View style={styles.buttonContainer}>
          <Button
            backgroundColor={Colors.WHITE}
            disabled={false}
            size="small-plus">
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Image source={pledgeIcon} style={styles.buttonImage} />
              <Text size="xs" weight="bold">
                {t('videoScreen.pledgeText')}
              </Text>
            </View>
          </Button>

          <Button
            backgroundColor={Colors.WHITE}
            disabled={false}
            size="medium"
            onPress={launchAddPozzleScreen}>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Image source={addPozzleIcon} style={styles.buttonImage} />
              <Text size="xs" weight="bold">
                {t('videoScreen.addPozzleText')}
              </Text>
            </View>
          </Button>
        </View>*/

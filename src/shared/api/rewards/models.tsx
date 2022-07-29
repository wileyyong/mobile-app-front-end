export type rewardsModel = {
    earnedBy?: {},
    activityId?: {},
    inspired?: boolean,
    rewards?: rewardItem[],
    type: typeRewards,
    createdOn?: string,
    _id?: string,
    status?: number
};

export type rewardItem = {
  type: string,
  value: number,
  description: string
  key?: string
  isTotal?: boolean
}

export enum typeRewards {
  create_activity = 'create_activity',
  join_activity = 'join_activity'
}
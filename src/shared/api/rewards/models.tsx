export type rewardsModel = {
    earnedBy?: {},
    activityId?: {},
    inspired?: boolean,
    rewards?: {},
    type: typeRewards,
    createdOn?: string,
    _id?: string,
    status?: number
};

export enum typeRewards {
  create_activity = 'create_activity'
}
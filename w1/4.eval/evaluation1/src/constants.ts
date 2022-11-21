

export enum TopicType {
    Pending = "Pending",
    Compeleted="Completed",
    Revision="Revision",
    New="New",
    // Refer Inital data to know other types
  }
  
  export type Topic = {
    id:number,
    type:TopicInfo,
    message:string,
    likes:number,
    // Refer Inital data to know all keys
  };
  
  export type TopicInfo = {
    // section title
    title: string;
    // can be use for section bgColor
    sectionBgColor: string;
    // can be use for item bgcolor
    itemBgColor: string;
  };
  
  // export const topicInfo: Record<TopicType, TopicInfo> = {
  //   Pending :"lightorange",
  //   // Need to add all the data
  // };



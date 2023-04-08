export type Link = {
  url: string;
  name: string;
};

export type WorkDetails = {
  company: string;
  position: string;
  details: string;
  startDate: string;
  endDate: string;
  tags: string[];
  isFulltime: boolean;
  links: Link[];
};

export type Skill = {
  level: string;
  name: string;
  type: string;
};

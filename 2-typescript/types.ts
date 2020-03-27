export type Hero = {
  name: string;
  strength: number;
  gender: string;
};

export type HeroCategory = {
  name: string;
  heroes: Hero[];
};

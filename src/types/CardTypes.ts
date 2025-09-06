export type CardType = {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export type CardFilterType = "all" | "active" | "inactive";

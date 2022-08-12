// The TypeScript definitions below are automatically generated.
// Do not touch them, or risk, your modifications being lost.

export enum IdentityProvider {
  Google = "google",
  Apple = "apple",
  Facebook = "facebook",
  GitHub = "github",
  LinkedIn = "linkedin",
  Microsoft = "microsoft",
  Twitter = "twitter",
  Yahoo = "yahoo",
  GameCenter = "gamecenter",
  PlayGames = "playgames",
}

export enum UserActionType {
  ResetPassword = "reset_password",
  LoginFailed = "login_failed",
}

export enum Table {
  Class = "class",
  ClassRequirement = "class_requirement",
  Dog = "dog",
  DogVaccination = "dog_vaccination",
  Identity = "identity",
  Requirement = "requirement",
  Role = "role",
  Track = "track",
  User = "user",
  UserAction = "user_action",
  UserRole = "user_role",
  Vaccination = "vaccination",
}

export type Class = {
  id: string;
  track_id: string;
  name: string | null;
  default_price: number | null;
};

export type ClassRequirement = {
  id: string;
  class_id: string;
  requirement_id: string;
};

export type Dog = {
  id: string;
  user_id: string;
  birth_date: Date | null;
  breed: string | null;
  picture: Record<string, unknown>;
  deleted_at: Date | null;
  name: string | null;
};

export type DogVaccination = {
  id: string;
  dog_id: string;
  vaccination_id: string;
  valid_through: Date;
  proof: Record<string, unknown>;
};

export type Identity = {
  provider: IdentityProvider;
  id: string;
  user_id: string;
  username: string | null;
  email: string | null;
  profile: Record<string, unknown>;
  credentials: Record<string, unknown>;
  created: Date;
  updated: Date;
};

export type Requirement = {
  id: string;
  name: string | null;
};

export type Role = {
  id: string;
  name: string | null;
};

export type Track = {
  id: string;
  name: string | null;
};

export type User = {
  id: string;
  username: string;
  email: string | null;
  email_verified: boolean;
  password: string | null;
  name: string | null;
  given_name: string | null;
  family_name: string | null;
  picture: Record<string, unknown>;
  time_zone: string | null;
  locale: string | null;
  admin: boolean;
  last_login: Date | null;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};

export type UserAction = {
  id: string;
  user_id: string;
  action: UserActionType;
  metadata: Record<string, unknown>;
  created: Date;
  updated: Date;
};

export type UserRole = {
  id: string;
  user_id: string;
  role_id: string;
};

export type Vaccination = {
  id: string;
  name: string | null;
  deleted_at: Date | null;
};


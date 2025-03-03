/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Account {
  accessToken: string | null;
  accessTokenExpiresAt: string | null;
  accountId: string;
  createdAt: string;
  id: string;
  idToken: string | null;
  password: string | null;
  providerId: string;
  refreshToken: string | null;
  refreshTokenExpiresAt: string | null;
  scope: string | null;
  updatedAt: string;
  userId: string;
}

export interface Albums {
  artist_id: number | null;
  id: Generated<number | null>;
  image_src: string;
  name: string;
  year: number;
}

export interface Artists {
  id: Generated<number | null>;
  image_src: string;
  name: string;
}

export interface Session {
  createdAt: string;
  expiresAt: string;
  id: string;
  ipAddress: string | null;
  token: string;
  updatedAt: string;
  userAgent: string | null;
  userId: string;
}

export interface Songs {
  album_id: number | null;
  audio: string;
  duration: Generated<number>;
  id: Generated<number | null>;
  name: string;
  year: number;
}

export interface User {
  createdAt: string;
  email: string;
  emailVerified: number;
  id: string;
  image: string | null;
  name: string;
  updatedAt: string;
}

export interface Verification {
  createdAt: string | null;
  expiresAt: string;
  id: string;
  identifier: string;
  updatedAt: string | null;
  value: string;
}

export interface DB {
  account: Account;
  albums: Albums;
  artists: Artists;
  session: Session;
  songs: Songs;
  user: User;
  verification: Verification;
}

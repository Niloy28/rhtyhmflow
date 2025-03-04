import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		BETTER_AUTH_URL: z.string().url(),
		BETTER_AUTH_SECRET: z.string().min(1),
		TURSO_DATABASE_URL: z.string().url(),
		TURSO_AUTH_TOKEN: z.string().min(1),
		GOOGLE_CLIENT_ID: z.string().min(1),
		GOOGLE_CLIENT_SECRET: z.string().min(1),
		R2_PUBLIC_SONG_URL: z.string().url(),
		R2_PUBLIC_ARTIST_URL: z.string().url(),
		R2_PUBLIC_ALBUM_URL: z.string().url(),
		R2_ACCESS_ID: z.string().min(1),
		R2_ACCESS_SECRET: z.string().min(1),
		R2_ACCOUNT_ID: z.string().min(1),
		ARTIST_BUCKET_NAME: z.string().min(1),
		ALBUM_BUCKET_NAME: z.string().min(1),
		SONG_BUCKET_NAME: z.string().min(1),
		IMAGE_MAX_SIZE: z
			.string()
			.transform((val) => parseInt(val))
			.pipe(z.number().int().positive()),
		SONG_MAX_SIZE: z
			.string()
			.transform((val) => parseInt(val))
			.pipe(z.number().int().positive()),
	},
	runtimeEnv: {
		BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
		BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
		TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
		TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		R2_PUBLIC_SONG_URL: process.env.R2_PUBLIC_SONG_URL,
		R2_PUBLIC_ARTIST_URL: process.env.R2_PUBLIC_ARTIST_URL,
		R2_PUBLIC_ALBUM_URL: process.env.R2_PUBLIC_ALBUM_URL,
		R2_ACCESS_ID: process.env.R2_ACCESS_ID,
		R2_ACCESS_SECRET: process.env.R2_ACCESS_SECRET,
		R2_ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
		ARTIST_BUCKET_NAME: process.env.ARTIST_BUCKET_NAME,
		ALBUM_BUCKET_NAME: process.env.ALBUM_BUCKET_NAME,
		SONG_BUCKET_NAME: process.env.SONG_BUCKET_NAME,
		IMAGE_MAX_SIZE: process.env.IMAGE_MAX_SIZE,
		SONG_MAX_SIZE: process.env.SONG_MAX_SIZE,
	},
});

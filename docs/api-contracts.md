# API Contracts

## POST /ai/generate-post
Request body:
- `topic: string`
- `platform: LINKEDIN | TWITTER | INSTAGRAM | FACEBOOK`
- `tone?: string`

Response:
- `content: string`
- `hashtags: string[]`
- `promptVersion: string`

## POST /posts
Headers:
- `x-user-id: string`

Request body:
- `platform: Platform`
- `content: string`
- `scheduledAt: ISO date`
- `timezone?: string`

Response:
- `postId: string`

## GET /posts
Headers:
- `x-user-id: string`

Response:
- list of scheduled/published/failed posts.

# Video upload and playback stream with NextJS

## What are we building?
1. Video upload stream with `createWriteStream`
2. Video watch stream with `createReadStream`

## What are we using
* Next.js 12
* [busboy](https://www.npmjs.com/package/busboy) - parsing incoming HTML form data

## Can I use a different backend
Yes - Next.js API routes use Express in the background so everything in this tutorial will work with Express. Other frameworks will have similar APIs.

## What will you learn?
* File upload streaming with Node.js
* File download streaming with Node.js
* HTTP headers (Content-Range, Accept-Ranges, Content-Length, Content-Type)
* Next.js API routes

## Video structure
1. Demo
2. Code walk-through
3. Video upload stream
4. Video watch stream
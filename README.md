# 🖥️ [owenelliott.dev](https://owenelliott.dev) 🖥️

Welcome to the source code for my personal website! This is a NextJS site written in TypeScript where I add all my articles, music and other bits and bobs.

## Interesting aspects of the site

There are couple of aspects of the site that I consider intersting enough to get their own section.

### How the Command Line works

When a user visits the site they are greeted with a command line which is intended to emulate the style and 'funcitonality' of the linux command line. This is obviously a complete farce and the implementation boils down to a bunch of conditional statements which is a lot less exciting and clever that it appears.

The fake directory structure is stored in a Map which provides the illusion of a directory structure that users can navigate.

### How articles are rendered

Articles are probably the more interesting part of the site, articles are done as SSG rendered dynamic routes. This means that an article name is used to dynamically route to a page which is then hydrated using code. Articles are generated from JSON that I have created and hosted on AWS.

The JSON files that configure the articles are a list of objects that have a `type` property and a `content` property as well as some additional optional properties that provide things such as the language for the code blocks and the alt text for images.

## Setup

To set up for local development install the dependencies with `npm i`

## Running locally

To run the development server use `npm run dev`

To format the code use `npm run format`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

Run `npm run build`.

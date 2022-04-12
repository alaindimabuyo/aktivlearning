
# Local development

These instructions should get you set up ready to work on Mobile App 🙌

## Getting Started

1. Install `node` & `npm`: `brew install node`
2. Install `watchman`: `brew install watchman`
3. Install dependencies: `npm install`

You can use any IDE or code editing tool for developing on any platform. Use your favorite!

## Running the iOS app 📱

- To install the iOS dependencies, run: `npm install && cd ios/ && pod install && cd ..`
- To run a on a **Development Simulator**: `npm run ios`
- Changes applied to Javascript will be applied automatically, any changes to native code will require a recompile

## Running the Android app 🤖

- To install the Android dependencies, run: `npm install`
- Make sure you have Java installed `java -version`. If not, install it by running `npm install -g openjdk8`.
- To run a on a **Development Emulator**: `npm run android`
- Changes applied to Javascript will be applied automatically, any changes to native code will require a recompile

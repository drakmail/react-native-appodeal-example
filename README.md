# React Native Appodeal Example (Android)

Example of integration appodeal SDK with react-native (based on [nulleof](https://github.com/nulleof/react-native-appodeal) modified package: [https://github.com/drakmail/react-native-appodeal](https://github.com/drakmail/react-native-appodeal))

![demo](https://raw.githubusercontent.com/drakmail/react-native-appodeal-example/master/demo/example.gif)

## How to run

1. `git clone https://github.com/drakmail/react-native-appodeal-example.git`
2. Install dependencies with `yarn install`
3. Run android version: `yarn run android`

## Step by step integration instructions

If you want to integrate appodeal to you react-native Android application you need to do the following steps:

### Add react-native-appodeal

You could use [my fork of react-native-appodeal](https://github.com/drakmail/react-native-appodeal), which compiles and running on android. Just run `yarn add https://github.com/drakmail/react-native-appodeal.git`

### Link dependencies

`react-native link react-native-appodeal`

### Tune build.gradle

Open `android/app/build.gradle` and add somewhere in `android` section:

```
dexOptions {
  jumboMode = true
  javaMaxHeapSize "2g"
}
```

and enable `multiDex` option by adding following line inside `defaultConfig` section:

```
multiDexEnabled true
```

### AndroidManifest.xml

According to [appodeal documentation](https://www.appodeal.ru/sdk/documentation?framework=1&full=1#p_4), you need to add following tags to your `android/app/src/main/AndroidManifest.xml` file:

1. Inside `<manifest>` tag:

```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

2. Inside `<application>` tag:

```xml
<meta-data android:name="com.appodeal.framework" android:value="android" />
<receiver android:name="com.appodeal.ads.AppodealPackageAddedReceiver" android:exported="true" android:enabled="true">
<intent-filter>
    <action android:name="android.intent.action.PACKAGE_ADDED" />
    <data android:scheme="package" />
</intent-filter>
</receiver>

<activity android:name="com.appodeal.ads.InterstitialActivity"
      android:configChanges="orientation|screenSize"
      android:theme="@android:style/Theme.Translucent.NoTitleBar" />
<activity android:name="com.appodeal.ads.VideoActivity"
      android:configChanges="orientation|screenSize"
      android:theme="@android:style/Theme.Translucent.NoTitleBar" />

<activity android:name="com.appodeal.ads.LoaderActivity"
      android:configChanges="orientation|screenSize"
      android:theme="@android:style/Theme.Translucent.NoTitleBar" />

<meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />

<activity android:name="com.google.android.gms.ads.AdActivity"
      android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize"
      android:theme="@android:style/Theme.Translucent" />

<activity android:name="com.chartboost.sdk.CBImpressionActivity" android:excludeFromRecents="true"
      android:hardwareAccelerated="true" android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
      android:configChanges="keyboardHidden|orientation|screenSize" />

<activity android:name="com.applovin.adview.AppLovinInterstitialActivity"
      android:theme="@android:style/Theme.Translucent" />

<activity android:name="com.mopub.mobileads.MoPubActivity"
      android:configChanges="keyboardHidden|orientation|screenSize"
      android:theme="@android:style/Theme.Translucent" />
<activity android:name="com.mopub.common.MoPubBrowser"
      android:configChanges="keyboardHidden|orientation|screenSize" />
<activity android:name="com.mopub.mobileads.MraidActivity"
      android:configChanges="keyboardHidden|orientation|screenSize" />
<activity android:name="com.mopub.mobileads.MraidVideoPlayerActivity"
      android:configChanges="keyboardHidden|orientation|screenSize" />

<activity android:name="org.nexage.sourcekit.mraid.MRAIDBrowser"
      android:configChanges="orientation|keyboard|keyboardHidden|screenSize"
      android:theme="@android:style/Theme.Translucent" />


<activity android:name="com.amazon.device.ads.AdActivity" android:configChanges="keyboardHidden|orientation|screenSize"/>

<activity android:name="com.my.target.ads.MyTargetActivity" android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize" android:hardwareAccelerated="true"/>

<activity android:name="org.nexage.sourcekit.vast.activity.VASTActivity"
      android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />

<activity android:name="org.nexage.sourcekit.vast.activity.VPAIDActivity"
      android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />

<!--suppress AndroidDomInspection -->
<activity android:name="com.appodeal.ads.networks.vpaid.VPAIDActivity"
      android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />

<activity android:name="com.appodeal.ads.networks.SpotXActivity"
      android:theme="@android:style/Theme.NoTitleBar.Fullscreen"/>
<!--suppress AndroidDomInspection -->
<activity android:name="com.facebook.ads.InterstitialAdActivity" android:configChanges="keyboardHidden|orientation|screenSize" />

<activity android:name="com.unity3d.ads.adunit.AdUnitActivity"
    android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
    android:theme="@android:style/Theme.NoTitleBar.Fullscreen" android:hardwareAccelerated="true" />
<activity android:name="com.unity3d.ads.adunit.AdUnitSoftwareActivity"
    android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
    android:theme="@android:style/Theme.NoTitleBar.Fullscreen" android:hardwareAccelerated="false" />
<activity android:name="com.unity3d.ads2.adunit.AdUnitActivity"
    android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
    android:theme="@android:style/Theme.NoTitleBar.Fullscreen" android:hardwareAccelerated="true" />
<activity android:name="com.unity3d.ads2.adunit.AdUnitSoftwareActivity"
    android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
    android:theme="@android:style/Theme.NoTitleBar.Fullscreen" android:hardwareAccelerated="false" />


<!--suppress AndroidDomInspection -->
<activity android:name="com.jirbo.adcolony.AdColonyOverlay"
      android:configChanges="keyboardHidden|orientation|screenSize"
      android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
<!--suppress AndroidDomInspection -->
<activity android:name="com.jirbo.adcolony.AdColonyFullscreen"
      android:configChanges="keyboardHidden|orientation|screenSize"
      android:theme="@android:style/Theme.Black.NoTitleBar.Fullscreen" />
<!--suppress AndroidDomInspection -->
<activity android:name="com.jirbo.adcolony.AdColonyBrowser"
      android:configChanges="keyboardHidden|orientation|screenSize"
      android:theme="@android:style/Theme.Black.NoTitleBar.Fullscreen" />
<!--suppress AndroidDomInspection -->
<activity android:name="com.vungle.publisher.FullScreenAdActivity"
      android:configChanges="keyboardHidden|orientation|screenSize"
      android:theme="@android:style/Theme.NoTitleBar.Fullscreen"/>
<!--suppress AndroidDomInspection -->
<activity android:name="com.startapp.android.publish.list3d.List3DActivity"
      android:theme="@android:style/Theme" />
<!--suppress AndroidDomInspection -->
<activity android:name="com.startapp.android.publish.OverlayActivity"
      android:theme="@android:style/Theme.Translucent"
      android:configChanges="orientation|keyboardHidden|screenSize" />
<!--suppress AndroidDomInspection -->
<activity android:name="com.startapp.android.publish.FullScreenActivity"
      android:theme="@android:style/Theme"
      android:configChanges="orientation|keyboardHidden|screenSize" />
<service android:name="com.yandex.metrica.MetricaService" android:enabled="true"
     android:exported="true" android:process=":Metrica">
	<intent-filter>
		<category android:name="android.intent.category.DEFAULT" />
		<action android:name="com.yandex.metrica.IMetricaService" />
		<data android:scheme="metrica" />
	</intent-filter>
	<meta-data android:name="metrica:api:level" android:value="52" />
</service>
<receiver android:name="com.yandex.metrica.MetricaEventHandler"
      android:enabled="true" android:exported="true">
	<intent-filter>
		<action android:name="com.android.vending.INSTALL_REFERRER" />
	</intent-filter>
</receiver>
<!--suppress AndroidDomInspection -->
<activity android:name="com.yandex.mobile.ads.AdActivity"
      android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize" />

<!--suppress AndroidDomInspection -->
<activity android:name="com.flurry.android.FlurryFullscreenTakeoverActivity"
      android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize" />

<activity android:name="com.appodeal.ads.VideoPlayerActivity" android:theme="@android:style/Theme.Black.NoTitleBar.Fullscreen"/>

<!--suppress AndroidDomInspection -->
<activity android:name="com.revmob.FullscreenActivity" android:theme="@android:style/Theme.Translucent"
    android:configChanges="keyboardHidden|orientation"/>

<!--suppress AndroidDomInspection -->
<activity android:name="com.tapjoy.TJAdUnitActivity" android:configChanges="orientation|keyboardHidden|screenSize"
            android:hardwareAccelerated="true" android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
<!--suppress AndroidDomInspection -->
<activity android:name="com.tapjoy.mraid.view.ActionHandler" android:configChanges="orientation|keyboardHidden|screenSize" />
<!--suppress AndroidDomInspection -->
<activity android:name="com.tapjoy.mraid.view.Browser" android:configChanges="orientation|keyboardHidden|screenSize" />
<!--suppress AndroidDomInspection -->
<activity android:name="com.tapjoy.TJContentActivity" android:configChanges="orientation|keyboardHidden|screenSize"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" android:hardwareAccelerated="true" />
```

## Usage

To use appodeal in react-native, you need to import package:

```javascript
import Appodeal from 'react-native-appodeal'
```

Initialize it:

```javascript
Appodeal.setTesting(true) // if you want to setup testing mode
Appodeal.init(YOUR_APPODEAL_API_KEY) // your API key
```

After that you could show banners:

```javascript
Appodeal.showBannerBottom()
```

For more implemented methods see the App.js file in this repo.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at i@drakmail.ru. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/

# LICENSE

The MIT License (MIT)

Copyright (c) 2017 drakmail

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

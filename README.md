# React Native ImageBackground

# Props :

## Image Source :

<p>The image source either a remote URL or a local file resource</p>
<ul>
<li>
<p>If we set image source from local file, then we need to specify the full local image path into require() function</p>

```js
source={require('./src/images/logo.png')}
```

</li>
<p>If we set image source from remote URL, then we need to specify the full URL link as a uri format</p>

```js
source={{uri: 'https://reactjs.org/logo-og.png'}}
```

</li>
</ul>

## style :

<p>You can set your background image style</p>

```js
style={{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    }}
```

## Usage

```
 $ git clone https://github.com/SuryaKarmakar/React-Native-ImageBackground.git
 $ cd React-Native-ImageBackground
 $ npm install
 $ npm run [web, android, ios]

```

## Run with Expo

```
 $ expo start --[web, android, ios]

```

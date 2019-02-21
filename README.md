# vue-sketchapp plugin BETA (hot-reload)

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

Basically used https://github.com/brainly/html-sketchapp

![Example vue components in sketchapp](http://dl3.joxi.net/drive/2019/02/20/0009/0709/651973/73/e8d95a82dd.jpg)
## Usage

Install the dependencies

```bash
npm install

cd sketch

npm install
```

### Configure plugin for sketchapp

```bash
cd ..
npm run webpack
npm run start
```

### Run hot-reload Vue-cli application
Open a new tab in the terminal, the previous tab should be open and listen to the plugin changes

```bash
cd sketch
npm run serve
```


#### Vue Src application in `sketch/src` folder

#### Vue app url http://localhost:8080/ setting in `server/inject.js`


### API

To set group names in a sketch: group1, app-container etc..  you need to install data attr to node.

**data-gname="child-block"** - group name in sketch

**data-rname="color rect"** - rectangle name

__Example__
```html
<div id="app" data-gname="app">
        <div data-gname="parent-block" class="test">
            <Block color="red" name="rect red"/>
            <Block color="black" name="rect black"/>
            <Block color="green" name="rect green"/>
        </div>
        <div data-gname="parent-block2" class="test">
            <Block color="red" name="rect red"/>
            <Block color="black" name="rect black"/>
            <Block color="green" name="rect green"/>
        </div>
    </div>
.....
```

__Block.vue component__
```html
<div :data-rname="name" data-gname="child-block" :class="color" class="block">
   Class {{color}}
</div>
```

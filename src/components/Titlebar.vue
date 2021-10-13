<template>
  <header class="titlebar">
    <div class="drag">
      <div id="window-title">
        <span>MyCloaks Installer</span>
      </div>
      <div class="controls">
        <div id="window-controls">
          <div class="button" id="close-button">
            <img
              class="icon"
              srcset="
                @/icons/close-w-10.png 1x,
                @/icons/close-w-12.png 1.25x,
                @/icons/close-w-15.png 1.5x,
                @/icons/close-w-15.png 1.75x,
                @/icons/close-w-20.png 2x,
                @/icons/close-w-20.png 2.25x,
                @/icons/close-w-24.png 2.5x,
                @/icons/close-w-30.png 3x,
                @/icons/close-w-30.png 3.5x
              "
              draggable="false"
              @click="closeWindow"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Titlebar",
};
</script>

<style>
@media (-webkit-device-pixel-ratio: 1.5),
  (device-pixel-ratio: 1.5),
  (-webkit-device-pixel-ratio: 2),
  (device-pixel-ratio: 2),
  (-webkit-device-pixel-ratio: 3),
  (device-pixel-ratio: 3) {
  #window-controls .icon {
    width: 10px;
    height: 10px;
  }
}

.titlebar {
  display: block;
  position: fixed;
  height: 32px;
  width: calc(100% - 2px); /*Compensate for body 1px border*/
  color: #fff;
  background: rgba(75, 75, 75, 0.4);
}

#window-title {
  grid-column: 1;
  display: flex;
  align-items: center;
  margin-left: 8px;
  overflow: hidden;
  font-family: "Segoe UI", sans-serif;
  font-size: 12px;
  user-select: none;
  -webkit-app-region: drag;
}

#window-title span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5;
}

.titlebar .drag {
  display: grid;
  width: 90%;
  height: 100%;
  -webkit-app-region: drag;
  grid-template-columns: auto 138px;
}

#window-controls {
  display: grid;
  grid-template-columns: repeat(3, 46px);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}

#window-controls .button {
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
}
#min-button {
  grid-column: 1;
}
#max-button,
#restore-button {
  grid-column: 2;
}
#close-button {
  grid-column: 3;
}

#window-controls .button:hover {
  background: rgba(255, 255, 255, 0.1);
}
#window-controls .button:active {
  background: rgba(255, 255, 255, 0.2);
}

#close-button:hover {
  background: #e81123 !important;
}
#close-button:active {
  background: #f1707a !important;
}
#close-button:active .icon {
  filter: invert(1);
}

#restore-button {
  display: none !important;
}
</style>

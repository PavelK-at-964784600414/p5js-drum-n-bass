
function mousePressed() {
  if (!state['is_playing']){
    maestor.update();
  }
}
  
function keyPressed() {
  let noteInfo = new Notation().getNoteFromKey(key);
  print(noteInfo);
  if (noteInfo) {
    let { note, octave } = noteInfo;
      maestor.bass.playPitch(note, octave);
  }
}
  
function startAudioContext() {
  if (typeof getAudioContext === 'function') {
      let audioCtx = getAudioContext();
      if (audioCtx.state === 'suspended') {
          audioCtx.resume().then(() => {
              console.log('AudioContext resumed');
          });
      }
  }
}
  

function update(){
  console.log('maestor');
  maestor.update();
}

function update_partial(){
  maestor.update_partial();
}

  
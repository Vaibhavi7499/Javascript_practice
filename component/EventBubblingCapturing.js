function divTag() {
  console.log("This is div tag");
}

function btnTag(event) {
  console.log("This is btn tag");
  event.stopPropagation();
}

import {Page, nodeToSketchLayers, nodeTreeToSketchPage} from '@brainly/html-sketchapp';

function flatten(arr) {
  return [].concat(...arr);
}

// Node: we could also use nodeTreeToSketchPage here and avoid traversing DOM ourselves
export function run(node = document.body) {
  const page = nodeTreeToSketchPage(node, {
    getRectangleName: function (node) {
      return node.dataset.rname;
    },
    getGroupName: function (node) {
      return node.dataset.gname;
    }
  });

  page.setName('Vue components');

  return page.toJSON();
}

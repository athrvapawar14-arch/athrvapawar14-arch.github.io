import { defineMdastPlugin } from "satteri";

export const remarkObsidianImages = defineMdastPlugin({
  name: "obsidian-images",

  text(node, ctx) {
    const regex = /!\[\[([^\]|]+)(?:\|(\d+))?\]\]/g;
    const text = node.value;

    if (!regex.test(text)) return;

    regex.lastIndex = 0;

    const match = regex.exec(text);

    if (!match) return;

    const filename = match[1].trim();
    const width = match[2];

    const imageNode: any = {
      type: "image",
      url: `./assets/${filename}`,
      alt: filename,
    };

    if (width) {
      imageNode.data = {
        hProperties: {
          width: Number(width),
        },
      };
    }

    ctx.replaceNode(node, imageNode);
  },
});
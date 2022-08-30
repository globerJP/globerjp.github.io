<template>
  <div>
    <el-tiptap :extensions="textExtensions" v-model="content" />
  </div>
</template>

<script>
import { ElementTiptap } from 'element-tiptap';
import FileSelector from '@/Components/FileSelector'
// import codemirror from 'codemirror';
// import 'codemirror/lib/codemirror.css'; // import base style
// import 'codemirror/mode/xml/xml.js'; // language
// import 'codemirror/addon/selection/active-line.js'; // require active-line.js
// import 'codemirror/addon/edit/closetag.js'; // autoCloseTags
import {
  Doc,
  Text,
  Paragraph,
  // text extensions
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  FontType,
  FontSize,
  TextColor,
  TextHighlight,
  FormatClear,
  // paragraph extensions
  Heading,
  ListItem,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  TextAlign,
  LineHeight,
  Indent,
  Blockquote,
  CodeBlock,
  // rich and tools extensions
  Link,
  Image,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Iframe,
  TrailingNode,
  HorizontalRule,
  Fullscreen,
  Print,
  // Preview,
  SelectAll,
  History,
  // CodeView,
} from 'element-tiptap';

// import {
//   // component
//   TiptapVuetify,
//   // extensions
//   Heading,
//   Bold,
//   Italic,
//   Strike,
//   Underline,
//   Code,
//   Paragraph,
//   BulletList,
//   OrderedList,
//   ListItem,
//   Link,
//   Blockquote,
//   HardBreak,
//   HorizontalRule,
//   History,
//   Image,
//   Table,
//   TableCell,
//   TableHeader,
//   TableRow
// } from 'tiptap-vuetify';

export default {
  components: { ElementTiptap },
  props: {
    value: {
      type: String,
      default: ''
    },
    changed: {
      type: String,
      default: ''
    }
  },
  watch: {
    content (val) {
      this.$emit("input", val);
    },
    value (val) {
      this.content = val || this.content;
    }
  },
  mounted() {
    this.content = this.value || this.content;
  },
  data() {
    return {
      html: '',
      textExtensions: [
        new History(),
        new Doc(),
        new Text(),
        new Paragraph(),
        new Bold({ bubble: true }),
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new Code(),
        new FontType(),
        new FontSize(),
        new TextColor({ bubble: true }),
        new TextHighlight({ bubble: true }),
        new FormatClear(),

        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new TextAlign(),
        new LineHeight(),
        new Indent(),
        new Blockquote(),
        new CodeBlock(),
        new Doc(),
        new Text(),
        new Paragraph(),
        new Link(),
        new Image(),
        new Iframe(),
        new Table({ resizable: true }),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new HorizontalRule(),
        new Print(),
        // new Preview(),
        new SelectAll(),
        new Fullscreen(),
        // new CodeView({
        //   codemirror,
        //   codemirrorOptions: {
        //     styleActiveLine: true,
        //     autoCloseTags: true,
        //   },
        // }),
        new TrailingNode(),
      ],
      // extensions: [
      // History,
      // Table,
      // TableCell,
      // TableHeader,
      // TableRow,
      // Blockquote,
      // Link,
      // Underline,
      // Strike,
      // Italic,
      // ListItem, // if you need to use a list (BulletList, OrderedList)
      // BulletList,
      // OrderedList,
      // [Image, {
      //   options: {
      //     imageSources: [
      //       { component: FileSelector, name: 'File Selector' }
      //     ]
      //   }
      // }],
      // [
      //   Heading,
      //   {
      //     // Options that fall into the tiptap's extension
      //     options: {
      //       levels: [1, 2, 3]
      //     }
      //   }
      // ],
      // Bold,
      // Code,
      // HorizontalRule,
      // Paragraph,
      // HardBreak // line break on Shift + Ctrl + Enter
      // ],
    content: '',
    content2: `
      <h1>Most basic use</h1>
      <p>
        You can use the buttons above to add different text decorations. For example:
        <strong>
          Bold.
        </strong>
        <i>
          Italics.
        </i>
      </p>
      <pre><code>You can even type some code.</code></pre>

      <blockquote>
        <p>Blockquote is awesome!</p>
      </blockquote>
      <p>Try adding a table like the one below:</p>
      <table>
        <tr>
          <th colspan="2" data-colwidth="100,0">Wide header</th>
        </tr>
        <tr>
          <td>One</td>
          <td>Two</td>
        </tr>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
      </table>
      <p>List items:</p>
      <ol>
        <li>
          <p>Item 1</p>
        </li>
        <li>
          <p>Item 2</p>
        </li>
      </ol>
    `
    }
  }
}
</script>
<style lang="scss">
  .v-tab:nth-child(3) {
    display: none;
  }
  .tiptap_vuetify {
    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 350px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
// <style lang="scss">
// .el-container {
//   background: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);
//   font-family: sans-serif;
// }
// .header {
//   display: flex;
//   justify-content: center;
//   height: 20vh !important;
//   padding-bottom: 20px;
//   padding-top: 20px;
//   &__left {
//     align-items: flex-start;
//     display: flex;
//     flex-direction: column;
//     margin-top: 50px;
//     .logo {
//       height: 50px;
//       margin-bottom: 20px;
//     }
//   }
//   &__right {
//     align-items: flex-start;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin-top: 50px;
//     margin-left: 10vw;
//     width: 650px;
//     .router-link {
//       color: #fff;
//       cursor: pointer;
//       flex-shrink: 0;
//       font-weight: 700;
//       letter-spacing: 1px;
//       margin: 15px;
//       transition: all 0.3s ease-in-out;
//       &:hover {
//         transform: translateY(-5px);
//       }
//       &--active {
//         border-bottom: 1px solid #fff;
//         text-transform: uppercase;
//       }
//     }
//   }
// }
// .el-main {
//   display: flex;
//   justify-content: center;
//   overflow: initial;
//   padding: 50px;
// }
// .el-tiptap-editor {
//   margin-bottom: 30px;
//   &__wrapper {
//     width: 60vw;
//   }
// }
// .el-footer {
//   align-items: center;
//   display: flex;
//   font-weight: 700;
//   font-size: 14px;
//   justify-content: center;
// }
// .github-corner:hover {
//   .octo-arm {
//     animation: octocat-wave 560ms ease-in-out;
//   }
// }
// @media (max-width: 500px) {
//   .github-corner:hover {
//     .octo-arm {
//       animation: none;
//     }
//   }
//   .github-corner {
//     .octo-arm {
//       animation: octocat-wave 560ms ease-in-out;
//     }
//   }
// }
// @keyframes octocat-wave {
//   0%,
//   100% {
//     transform: rotate(0);
//   }
//   20%,
//   60% {
//     transform: rotate(-25deg);
//   }
//   40%,
//   80% {
//     transform: rotate(10deg);
//   }
// }
// </style>

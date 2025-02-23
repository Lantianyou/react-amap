import { Component, Fragment } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import pkg from '@uiw/react-amap/package.json';
import Code from './Code';
import Footer from '../Footer';
import styles from './index.module.less';

interface MarkdownProps {}
interface MarkdownState {
  mdStr: string;
}

const getCodeStr = (data: any[] = [], code: string = '') => {
  data.forEach((node) => {
    if (node.type === 'text') {
      code += node.value;
    } else if (node.children && Array.isArray(node.children)) {
      code += getCodeStr(node.children);
    }
  });
  return code;
};

export default class Markdown extends Component<MarkdownProps, MarkdownState> {
  constructor(props: MarkdownProps) {
    super(props);
    this.state = {
      mdStr: '',
    };
  }
  editorUrl?: string;
  getMdStr?: any;
  dependencies?: any;
  componentDidMount() {
    if (this.getMdStr) {
      this.getMdStr().then((str: any) => {
        this.setState({
          mdStr: str.default || str,
        });
      });
    }
  }
  render() {
    return (
      <Fragment>
        <MarkdownPreview
          style={{ padding: '20px 26px' }}
          source={this.state.mdStr}
          className={styles.markdown}
          components={{
            /**
             * 代码注释参数
             *
             * ```md
             * <!--rehype:bgWhite=true&codeSandbox=true-->
             * ```
             * 参数用英文逗号隔开
             *
             * bordered 边框
             * bgWhite 设置代码预览背景白色，否则为格子背景。
             * noCode 不显示代码编辑器。
             * noPreview 不显示代码预览效果。
             * noScroll 预览区域不显示滚动条。
             * codePen 显示 Codepen 按钮，要特别注意 包导入的问题，实例中的 import 主要用于 Codepen 使用。
             */
            code: ({ inline, node, ...props }) => {
              const { noPreview, noScroll, bgWhite, noCode, codeSandbox, codePen } = props as any;
              if (inline) {
                return <code {...props} />;
              }
              const config = { noPreview, noScroll, bgWhite, noCode, codeSandbox, codePen } as any;
              if (Object.keys(config).filter((name) => config[name] !== undefined).length === 0) {
                return <code {...props} />;
              }
              return (
                <Code
                  version={pkg.version}
                  code={getCodeStr(node.children)}
                  dependencies={this.dependencies}
                  {...{ noPreview, noScroll, bgWhite, noCode, codePen, codeSandbox }}
                />
              );
            },
          }}
        />
        <Footer editorUrl={this.editorUrl} />
      </Fragment>
    );
  }
}

import React, { useRef } from "react";

import classNames from "clsx";
import sqlFormatter from "sql-formatter-plus";
import Editor, { type EditorProps, loader, type OnMount } from "@monaco-editor/react";
import { RiBrushLine, RiFullscreenExitLine, RiFullscreenLine } from "@remixicon/react";

import styles from "./index.module.css";

loader.config({ paths: { vs: "https://unpkg.com/monaco-editor@0.52.2/min/vs/" } });

export interface CodeEditorProps extends EditorProps {
  toolbarLeft?: React.ReactNode;
  bordered?: boolean;
  style?: React.CSSProperties;
}

const CodeEditor = ({ options, bordered = true, toolbarLeft, style, height, ...props }: CodeEditorProps) => {
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const editorRef = useRef<any>(null);

  const handleMount: OnMount = (editor, monacoInstance) => {
    editorRef.current = editor;

    if (props.language === "sql") {
      monacoInstance.languages.registerDocumentFormattingEditProvider("sql", {
        provideDocumentFormattingEdits(model) {
          const original = model.getValue();
          let formatted: string;

          try {
            formatted = sqlFormatter.format(original, {
              language: "sql", // Defaults to "sql"
              uppercase: true, // Defaults to false
              linesBetweenQueries: 2, // Defaults to 1
            });
          } catch (e) {
            console.warn(e);
            // 如果格式化失败，什么都不做
            return [];
          }

          if (formatted === original) {
            return [];
          }

          return [
            {
              range: model.getFullModelRange(),
              text: formatted,
            },
          ];
        },
      });
    }
  };

  const format = () => {
    editorRef.current?.getAction("editor.action.formatDocument").run();
  };

  return (
    <div
      style={style}
      className={classNames(styles.codeEditor, {
        [styles.fullscreen]: isFullScreen,
      })}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <div>{toolbarLeft}</div>
        <div className="flex items-center space-x-2">
          {!options?.readOnly && (
            <button onClick={format} style={{ minWidth: 42 }}>
              <RiBrushLine style={{ width: 14, height: 14 }} />
            </button>
          )}
          <button onClick={() => setIsFullScreen(!isFullScreen)} style={{ minWidth: 42 }}>
            {isFullScreen ? <RiFullscreenExitLine style={{ width: 14, height: 14 }} /> : <RiFullscreenLine style={{ width: 14, height: 14 }} />}
          </button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          border: bordered ? "1px solid #f0f0f0" : "none",
          borderRadius: 4,
          overflow: "auto",
        }}
      >
        <Editor
          options={{
            placeholder: "请输入",
            minimap: {
              enabled: false,
            },
            glyphMargin: false,
            folding: true,
            fontSize: 14,
            tabSize: 2,
            formatOnPaste: true,
            lineNumbersMinChars: 3, // 保留至少 2 个字符宽度
            scrollBeyondLastLine: false,
            automaticLayout: true,
            quickSuggestions: true,
            padding: { top: 8, bottom: 8 },
            overviewRulerBorder: false,
            scrollbar: {
              // 允许滚动冒泡
              alwaysConsumeMouseWheel: false,
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
            smoothScrolling: true,
            scrollPredominantAxis: false,
            ...options,
          }}
          height={isFullScreen ? "100%" : height}
          onMount={handleMount}
          {...props}
        />
      </div>
    </div>
  );
};

export default CodeEditor;

import type React from "react";
import { useState } from "react";
import { Document, type DocumentProps, Page, pdfjs } from "react-pdf";

import clsx from "clsx";
import { download } from "@fe-kit/utils";
import { Icon } from "@iconify/react";

import { Progress } from "../react-progress";
import { Spin } from "../react-spin";
import IconButton from "./icon-button";
import Pagination from "./pagination";
import type { LoadStatus, PageState } from "./types";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./index.css";

export interface PdfViewerProps {
  /**
   * 文件url
   */
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const pdfjsOptions: DocumentProps["options"] = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
  isEvalSupported: false,
};

export const PdfViewer = ({ url, className, style }: PdfViewerProps) => {
  const [pageData, setPageData] = useState<PageState[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string>();

  if (status === "error") {
    return <div>{error}</div>;
  }

  /** 旋转 */
  const handleRotate = () => {
    setPageData(
      pageData.map((item, i) => {
        return pageIndex === i ? { ...item, rotate: item.rotate === 270 ? 0 : item.rotate + 90 } : item;
      }),
    );
  };

  /** 放大 */
  const handleZoomIn = () => {
    const currentScale = pageData.find((_, i) => i === pageIndex)?.scale ?? 0;

    if (currentScale >= 2) {
      return;
    }

    setPageData(pageData.map((item, i) => (pageIndex === i ? { ...item, scale: item.scale + 0.1 } : item)));
  };

  /** 缩小 */
  const handleZoomOut = () => {
    const currentScale = pageData.find((_, i) => i === pageIndex)?.scale ?? 0;

    if (currentScale <= 0.1) {
      return;
    }

    setPageData(pageData.map((item, i) => (pageIndex === i ? { ...item, scale: item.scale - 0.1 } : item)));
  };

  const handleRecoverSize = () => {
    setPageData(pageData.map((item, i) => (pageIndex === i ? { ...item, scale: 0.8 } : item)));
  };

  return (
    <div className={clsx("flex flex-col justify-center", className)} style={style}>
      <div className="min-h-0 grow overflow-auto">
        <Document
          file={url}
          className="dev-kit-pdf-document"
          loading={
            <div className="flex flex-col items-center space-y-6">
              <Spin />
              <Progress percent={progress} style={{ width: 400 }} />
            </div>
          }
          noData={<span>暂无数据</span>}
          // options should be out of component
          options={pdfjsOptions}
          onLoadSuccess={({ numPages }) => {
            setStatus("success");
            setPageData(
              Array(numPages).fill({
                rotate: 0,
                scale: 1,
              }),
            );
          }}
          onLoadProgress={({ loaded, total }) => {
            setProgress(Math.round((loaded / total) * 100));
          }}
          onLoadError={err => {
            setStatus("error");
            setError(err.message);
          }}
        >
          <Page renderAnnotationLayer renderTextLayer rotate={pageData[pageIndex]?.rotate} scale={pageData[pageIndex]?.scale} pageIndex={pageIndex} />
        </Document>
      </div>
      {status === "success" && (
        <div className="flex items-center justify-center rounded border p-2">
          <Pagination pageIndex={pageIndex + 1} onChange={page => setPageIndex(page - 1)} total={pageData.length} />
          <Icon icon="fluent:divider-short-16-regular" className="text-gray-300" />
          <div className="flex items-center space-x-1">
            <IconButton onClick={handleZoomIn}>
              <Icon icon="material-symbols:zoom-in-rounded" />
            </IconButton>
            <IconButton onClick={handleZoomOut}>
              <Icon icon="material-symbols:zoom-out-rounded" />
            </IconButton>
            <IconButton onClick={handleRecoverSize}>
              <Icon icon="material-symbols:reset-image" />
            </IconButton>
            <IconButton onClick={handleRotate}>
              <Icon icon="material-symbols:rotate-90-degrees-cw-rounded" />
            </IconButton>
            <IconButton
              onClick={() => {
                download(url);
              }}
            >
              <Icon icon="material-symbols:download" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

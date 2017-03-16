"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_draft_wysiwyg_1 = require("react-draft-wysiwyg");
require("react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
require("./index.css");
var draftjs_to_html_1 = require("draftjs-to-html");
exports.draftToHtml = draftjs_to_html_1.default;
var html_to_draftjs_1 = require("html-to-draftjs");
var draft_js_1 = require("draft-js");
/**
 * convert html to Draft State
 * @param content your contents
 * @return {EditorState}
 */
exports.htmlToDraft = function (content) {
    var blocksFromHTML;
    /**
     * catch other editor's content.
     */
    try {
        blocksFromHTML = html_to_draftjs_1.default(content);
    }
    catch (error) {
        blocksFromHTML = draft_js_1.convertFromHTML(content);
    }
    var contentBlocks = blocksFromHTML.contentBlocks;
    var contentState = draft_js_1.ContentState.createFromBlockArray(contentBlocks);
    return draft_js_1.EditorState.createWithContent(contentState);
};
/**
 * an empty state
 */
exports.EmptyState = draft_js_1.EditorState.createEmpty();
exports.A = function (arr) {
    return arr.map(function (a) { a; });
};
/**
 * Draft
 *
 * @class Draft
 * @extends {React.Component<DraftProps, DraftState>}
 */
var Draft = (function (_super) {
    __extends(Draft, _super);
    function Draft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Draft.prototype.render = function () {
        return React.createElement(react_draft_wysiwyg_1.Editor, __assign({ wrapperClassName: "hake-draft-wrapper", editorClassName: "hake-draft-editor", toolbarClassName: "hake-draft-toolbar", placeholder: "写点什么...", toolbar: this.props.toolbar }, this.props));
    };
    return Draft;
}(React.Component));
Draft.defaultProps = {
    toolbar: {
        options: ['inline', 'colorPicker', 'blockType', 'fontSize', 'link', 'list', 'textAlign', 'remove', 'history'],
        inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough']
        },
        fontSize: {
            options: [10, 12, 14, 18, 24, 30, 36, 48]
        },
        list: {
            options: ['unordered', 'ordered']
        }
    }
};
exports.default = Draft;
//# sourceMappingURL=index.js.map
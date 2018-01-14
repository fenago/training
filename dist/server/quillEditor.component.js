"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Quill = require('quill');
var QuillEditorComponent = (function () {
    // 注入Dom
    function QuillEditorComponent(elementRef) {
        this.elementRef = elementRef;
        this.defaultModules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': new Array() }, { 'background': new Array() }],
                [{ 'font': new Array() }],
                [{ 'align': new Array() }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
        // 派发事件
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.change = new core_1.EventEmitter();
        // ...
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    QuillEditorComponent_1 = QuillEditorComponent;
    // 视图加载完成后执行初始化
    QuillEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editorElem = this.elementRef.nativeElement.children[0];
        this.quillEditor = new Quill(this.editorElem, Object.assign({
            modules: this.defaultModules,
            placeholder: 'Insert text here ...',
            readOnly: false,
            theme: 'snow',
            boundary: document.body
        }, this.options || {}));
        // 写入内容
        if (this.content) {
            this.quillEditor.pasteHTML(this.content);
        }
        // 广播事件
        this.ready.emit(this.quillEditor);
        // mark model as touched if editor lost focus
        this.quillEditor.on('selection-change', function (range) {
            if (!range) {
                _this.onModelTouched();
                _this.blur.emit(_this.quillEditor);
            }
            else {
                _this.focus.emit(_this.quillEditor);
            }
        });
        // update model if text changes
        this.quillEditor.on('text-change', function (delta, oldDelta, source) {
            var html = _this.editorElem.children[0].innerHTML;
            var text = _this.quillEditor.getText();
            if (html === '<p><br></p>')
                html = null;
            _this.onModelChange(html);
            _this.change.emit({
                editor: _this.quillEditor,
                html: html,
                text: text
            });
        });
    };
    // 数据变更时
    QuillEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes['readOnly'] && this.quillEditor) {
            this.quillEditor.enable(!changes['readOnly'].currentValue);
        }
    };
    // 写数据
    QuillEditorComponent.prototype.writeValue = function (currentValue) {
        this.content = currentValue;
        if (this.quillEditor) {
            if (currentValue) {
                this.quillEditor.pasteHTML(currentValue);
                return;
            }
            this.quillEditor.setText('');
        }
    };
    // 注册事件
    QuillEditorComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    // 注册事件
    QuillEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuillEditorComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuillEditorComponent.prototype, "blur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuillEditorComponent.prototype, "focus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuillEditorComponent.prototype, "ready", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuillEditorComponent.prototype, "change", void 0);
    QuillEditorComponent = QuillEditorComponent_1 = __decorate([
        core_1.Component({
            selector: 'quill-editor',
            template: "<div class=\"quill-editor\"></div>",
            styleUrls: [
                './quillEditor.component.css',
                '../quill/dist/quill.core.css',
                '../quill/dist/quill.snow.css',
                '../quill/dist/quill.bubble.css'
            ],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return QuillEditorComponent_1; }),
                    multi: true
                }],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], QuillEditorComponent);
    return QuillEditorComponent;
    var QuillEditorComponent_1;
}());
exports.QuillEditorComponent = QuillEditorComponent;
//# sourceMappingURL=quillEditor.component.js.map
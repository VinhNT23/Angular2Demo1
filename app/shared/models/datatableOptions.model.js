"use strict";
var DataTableOptions = (function () {
    function DataTableOptions(columns, options) {
        if (options === void 0) { options = {}; }
        var defaultOptions = Object.assign({
            ajax: undefined,
            rowCallback: undefined,
            order: [[1, 'asc']],
            serverSide: true,
            processing: true,
            dom: 'tip',
            select: {
                style: 'multi',
                selector: 'td:first-child input'
            },
            responsive: true,
            paging: true,
            ordering: true,
            searching: true,
            info: true,
            autoWidth: true,
            columnDefs: [],
            fixedColumns: false,
            scrollX: false,
            scrollY: false,
            scrollCollapse: false,
            data: []
        }, options);
        this.columns = columns || [];
        this.ajax = defaultOptions.ajax;
        this.rowCallback = defaultOptions.rowCallback;
        this.order = defaultOptions.order;
        this.serverSide = defaultOptions.serverSide;
        this.processing = defaultOptions.processing;
        this.dom = defaultOptions.dom;
        this.select = defaultOptions.select;
        this.responsive = defaultOptions.responsive;
        this.paging = defaultOptions.paging;
        this.ordering = defaultOptions.ordering;
        this.searching = defaultOptions.searching;
        this.info = defaultOptions.info;
        this.autoWidth = defaultOptions.autoWidth;
        this.fixedColumns = defaultOptions.fixedColumns;
        this.scrollY = defaultOptions.scrollY;
        this.scrollX = defaultOptions.scrollX;
        this.scrollCollapse = defaultOptions.scrollCollapse;
        this.columnDefs = defaultOptions.columnDefs;
        this.data = defaultOptions.data;
    }
    return DataTableOptions;
}());
exports.DataTableOptions = DataTableOptions;
//# sourceMappingURL=datatableOptions.model.js.map
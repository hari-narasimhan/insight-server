"use strict";

exports.getQueryOptions = function (page, limit, columns, sortBy) {
    var _page = parseInt(page), 
        _limit = parseInt(limit);
    
    var _columns, _sortBy;
    
    console.log({columns: columns, sortBy: sortBy});
    
    _page = _page || 1;
    _limit = _limit || 10;
    _columns = columns || null;
    _sortBy = sortBy || {_id: -1};
    return {page: _page, limit: _limit, columns: _columns, sortBy : _sortBy};
};

exports.getCursor = function (options, count) {
    
    return {currentPage: options.page, 
                           limit: options.limit, 
                           totalRecords: count, 
                           totalPages: Math.ceil(count/options.limit)
          };
};
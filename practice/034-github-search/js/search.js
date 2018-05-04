


let el = require('./element.js')
  , send = require('./send.js')
 
  ;  

function find_user(keyword, config) {
    el.next.disabled = true;
    el.next.hidden = false;
    placeholer.hidden = true;
    el.next.innerHTML = '加载中';
    let def = {
        page: 1,
        limit: 5,
    }
    config = Object.assign({}, def, config);
    send.send('get','https://api.github.com/search/users?q='+keyword + '&page=' + config.page + '&per_page=' + config.limit, function (data) {
        el.render_user_list(data.items);
        el.show_next(data.total_count/el.limit);
        el.next.disabled = false;
        el.next.innerHTML = '加载更多';
    },config);
}


module.exports = {
    find_user: find_user,
}
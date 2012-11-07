var regex = /([^">;]|^)\b((?:https?|ftp):\/\/[A-Za-z0-9][-A-Za-z0-9+&@#\/%?=~_|\[\]\(\)!:,.;]*[-A-Za-z0-9+&@#\/%=~_|\[\]])/gi

module.exports = linky

function linky(text,options){
    options = typeof options === "object" ? options : {}
    text = typeof text === "string" ? text : ""
    var o = {
            target : options.target || ""
        }
    
    target = typeof target === "string" ? target : ""
    return text.replace(regex,function(a){
        return " <a href=\""+a.trim()+"\" target=\""+o.target+"\">"+a.trim()+"</a>"
    })
}
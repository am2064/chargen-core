var debug=require('debug')('chargen');
module.exports={
	_stats:{
		rolled:{},
		base:{},
		calculated:{}
	},
	_class:'',
	_level:0,
	initialize:function(_stats){
		if(_stats._class){
			this._class=_stats._class;
			delete _stats._class;
		}
		if(_stats.level){
			this._level=_stats.level;
			delete _stats.level;
		}
		this._stats.rolled=_stats;
		this._stats.base=_stats;
		debug('initial this',this);
		debug('initial stats',this._stats);
		return this;
	},
	getLevel:function(){
		debug('getLevel this',this);
		debug('getLevel level',this._level);
		return this._level;
	},
	getRolledScores:function(){
		debug('getRolledScores this',this);
		debug('getRolledScores stats',this._stats.rolled);
		return this._stats.rolled;
	},
	getBaseScores:function(){
		debug('getBaseScores this',this);
		debug('getBaseScores stats',this._stats.base);
		return this._stats.base;
	},
}

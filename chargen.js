var debug=require('debug')('chargen');
module.exports={
	_stats:{
		rolled:{},
		base:{},
		calculated:{}
	},
	_class:'',
	_level:0,
	_previousLevel:undefined,
	_calculateScores:function(scores){
		return scores;
	},
	_abilities:{},
	_inventories:{},
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
		this._stats.calculated=this._calculateScores(_stats);
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
	getCalculatedScores:function(){
		debug('getCalculatedScores this',this);
		debug('getCalculatedScores stats',this._stats.calculated);
		return this._stats.calculated;
	},
	getAbilities:function(){
		debug('getAbilities this',this);
		debug('getAbilities abilities',this._abilities);
		return this._abilities;
	},
	getInventories:function(){
		debug('getInventories this',this);
		debug('getInventories inventories',this._inventories);
		return this._inventories;
	},
	addAbilityCategory:function(name){
		this._abilities[name]=[];
		debug('addAbilityCategory this',this);
		debug('addAbilityCategory abilities',this._abilities);
		return this;
	},
	addInventoryCategory:function(name){
		this._inventories[name]=[];
		debug('addInventoryCategory this',this);
		debug('addInventoryCategory inventories',this._inventories);
		return this;
	},
	addToAbilityCategory:function(name,ability){
		this._abilities[name].push(ability);
		debug('addToAbilityCategory this',this);
		debug('addToAbilityCategory abilities',this._abilities);
		return this;
	},
	addToInventoryCategory:function(name,inventory){
		this._inventories[name].push(inventory);
		debug('addToInventoryCategory this',this);
		debug('addToInventoryCategory inventories',this._inventories);
		return this;
	},
	levelUp:function(){
		this._level++;
		debug('levelUp this',this);
		debug('levelUp level',this._level);
		return this;
	},
	setLevel:function(level){
		this._level=level;
		debug('setLevel this',this);
		debug('setLevel level',this._level);
		return this;
	},
	toJSON:function(){
		return {
			clazz:this._class,
			level:this._level,
			stats:this._stats,
			inventories:this._inventories,
			abilities:this._abilities
		};
	}
}

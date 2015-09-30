describe('Core Library',function(){
		describe('#init()',function(){

				//TODO run init function here and compare export(json) after
				it('rolled scores',function(){});
				it('non-rolled scores',function(){});
				it('any abilities and their category',function(){});
				it('any inventory and their category',function(){});
				});

		describe('#set()',function(){
				//TODO run init function here and then set it to level 3 and compare export(json) after in the its
				it('rolled scores',function(){});
				it('non-rolled scores',function(){});
				it('any abilities and their category',function(){});
				it('any inventory and their category',function(){});
				});

		describe('#level()',function(){
				//TODO run init function here and then run the level function and compare export(json) after in the its
				it('rolled scores',function(){});
				it('non-rolled scores',function(){});
				it('any abilities and their category',function(){});
				it('any inventory and their category',function(){});
				});

		describe('#export()',function(){
				//TODO run init function here and set as many variables as possible to cover
				//	* rolled scores
				//	* non-rolled scores
				//	* abilities
				//	* inventory
				it('json',function(){});
				it('yaml',function(){});
				it('csv',function(){});
				it('pretty print',function(){});
				it('pdf',function(){});
				it('ascii art',function(){});
				});
});

/** ORIGINAL DOCUMENTATION SPEC **/
/**
 **	//Example of use

 **	var NewCharacter = new require('chargen')(require('chargen-plugin'));

 **	//Plugin needs to be initiated with settings in a format like this
 **	var NewCharacter = new require('chargen')(require('m20-chargen')){
 **	hp_method: roll,
 **	sp: true,
 **	sp_method: roll
 **	};

 **	//Doing this with {stats} automatically calls setStats after initialization.
 **	NewCharacter.initialize({
 **	strength: 18,
 **	dexterity: 10,
 **	mind: 12,
 **	class: 'Wizard'
 **	});

 **	//Since the settings are built into the intialization, this means that leveling can occur.
 **	NewCharacter.levelUp();

 **	//If you are about to level and theres a requirement, you may need to provide information to the API
 **	//If you do not it will give you an error
 **	NewCharacter.levelUp({
 **	Favored Spell: 'Fire Bolt'
 **	});

 **	//If you set level you can provide an array of objects that will be used in order for levelup settings.
 **	//This function will reset your character to level one and automatically call levelUp a number of times with
 **	//the levelUp setting as appropriate.
 **	NewCharacter.setLevel(3,[{favored_spell:'Fire Bolt'},{favored_spell:'Ice Bolt'}]);

 **	//Finally you can use this to export various things;


 **	var json=NewCharacter.exportJson(); //json object
 **	var csv=NewCharacter.exportCSV(); // csv string
 **	var ascii=NewCharacter.exportAscii(); // multiline ASCII art prettyprint character sheet string. Formatted to 80 columns.
 **	NewCharacter.exportPdf('filePath',function(){
 **	//Callback to call after the file has beeen written.
 **	return true;
 **	});

 **	/**
 **	it should

 **	 * track
 **	 * how to evaluate non-rolled scores
 **	 * how to account for special inventories such as
 **	 * ammo
 **	 * durability
 **	 * key items
 **	 * how to account for special items such as
 **	 * stat boosting items
 **	 * permanent stat boost items
 **	 * ability giving items

 **	 * account for
 **	 * rolled scores
 **	 * non-rolled scores
 **	 * any abilities and their category
 **	 * any inventory and their category

 **	 * export to
 **	 * json
 **	 * yaml
 **	 * csv
 **	 * other formats...

	 **	 * pretty print
	 **	 * pdf
	 **	 * ascii art
	 **/

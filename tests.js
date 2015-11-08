describe('Core Library',function(){
	//REMEMBER This is not specialized at all.
	beforeEach(function(){
		var NewCharacter = new require('./chargen');

		NewCharacter.initialize({
			strength: 18,
			dexterity: 10,
			mind: 12,
			class: 'Wizard'
		});
	});

	describe('#init()',function(){
		it('should be at level 0',function(){
			var level=NewCharacter.getLevel();
			level.should.be.equal.to(0);
		});
		it('should have rolled scores',function(){
			var scores=NewCharacter.getRolledScores();
			scores.should.be.equal.to({
				strength:18,
				dexterity:10,
				mind:12
			});
		});
		it('should have calculated non-rolled scores',function(){
			var scores=NewCharacter.getCalculatedScores();
			scores.should.be.equal.to({});
		});
		it('should have initiated any abilities and their category',function(){
			var abilities=NewCharacter.getAbilities();
			abilities.should.be.equal.to({});
		});
		it('should have initiated any inventory and their category',function(){
			var inventories=NewCharacter.getInventories();
			intentories.should.be.equal.to({});
		});
	});

	describe('#interactWithAbilities',function(){
		it('should let you create a new ability category',function(){
			NewCharacter.addAbilityCategory('skills');
			var abilities=NewCharacter.getAbilities();
			abilities.should.be.equal.to({
				skills:[]
			});
		});
		it('should let you add an ability to that category',function(){
			NewCharacter.addToAbilityCategory('skills',{
				name:"Basket Weaving",
				description:"Allows you to weave baskets."
			});
			var abilities=NewCharacter.getAbilities();
			abilities.should.be.equal.to({
				skills:[{
					name:"Basket Weaving",
					description:"Allows you to weave baskets."
				}]
			});
		});
	});
	describe('#interactWithIntentories',function(){
		it('should let you create a new inventory',function(){
			NewCharacter.addIntentoryCategory('ammo');
			var categories=NewCharacter.getCategories();
			categories.should.be.equal.to({
				ammo:[]
			});
		});
		it('should let you add things to the new inventory',function(){
			NewCharacter.addToInventoryCategory('ammo',{
				name:"Solid Projectile",
				description:"A slug of cheap metal"
			});
			var categories=NewCharacter.getCategories();
			categories.should.be.equal.to({
				ammo:[{
					name:"Solid Projectile",
					description:"A slug of cheap metal"
				}]
			});

		});
	});

	describe('#levelUp()',function(){
		before(function(){
			NewCharacter
				.addAbilityCategory('skills')
				.addIntentoryCategory('ammo')
				.addToAbilityCategory('skills',{
					name:"Basket Weaving",
					description:"Allows you to weave baskets."
				})
			.addToInventoryCategory('ammo',{
				name:"Solid Projectile",
				description:"A slug of cheap metal"
			})
			.levelUp();
		});
		it('should be at level 1',function(){
			var level=NewCharacter.getLevel();
			level.should.be.equal.to(1);
		});
		it('should have stored original rolled scores',function(){
			var scores=NewCharacter.getRolledScores();
			scores.should.be.equal.to({
				strength:18,
				dexterity:10,
				mind:12
			});
		});
		it('should have updated rolled scores',function(){
			var scores=NewCharacter.getBaseScores();
			scores.should.be.equal.to({
				strength:18,
				dexterity:10,
				mind:12
			});
		});
		it('should have updated non-rolled scores',function(){
			var scores=NewCharacter.getCalculatedScores();
			scores.should.be.equal.to({});
		});
		it('should have updated abilities and their category',function(){
			var abilities=NewCharacter.getAbilities();
			abilities.should.be.equal.to({
				skills:[{
					name:"Basket Weaving",
					description:"Allows you to weave baskets."
				}]
			});
		});
		it('should still have any inventory and their category',function(){
			var categories=NewCharacter.getCategories();
			categories.should.be.equal.to({
				ammo:[{
					name:"Solid Projectile",
					description:"A slug of cheap metal"
				}]
			});
		});
	});

	describe('#setLevel()',function(){
		before(function(){
			NewCharacter
				.addAbilityCategory('skills')
				.addIntentoryCategory('ammo')
				.addToAbilityCategory('skills',{
					name:"Basket Weaving",
					description:"Allows you to weave baskets."
				})
			.addToInventoryCategory('ammo',{
				name:"Solid Projectile",
				description:"A slug of cheap metal"
			})
			.setLevel(3);
		});
		it('should be at level 3',function(){
			var level=NewCharacter.getLevel();
			level.should.be.equal.to(3);
		});
		it('should have stored original rolled scores',function(){
			var scores=NewCharacter.getRolledScores();
			scores.should.be.equal.to({
				strength:18,
				dexterity:10,
				mind:12
			});
		});
		it('should have updated rolled scores',function(){
			var scores=NewCharacter.getBaseScores();
			scores.should.be.equal.to({
				strength:18,
				dexterity:10,
				mind:12
			});
		});
		it('should have updated non-rolled scores',function(){
			var scores=NewCharacter.getCalculatedScores();
			scores.should.be.equal.to({});
		});
		it('should have updated abilities and their category',function(){
			var abilities=NewCharacter.getAbilities();
			abilities.should.be.equal.to({
				skills:[{
					name:"Basket Weaving",
					description:"Allows you to weave baskets."
				}]
			});
		});
		it('should still have any inventory and their category',function(){
			var categories=NewCharacter.getCategories();
			categories.should.be.equal.to({
				ammo:[{
					name:"Solid Projectile",
					description:"A slug of cheap metal"
				}]
			});
		});
	});

	/*
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
	*/
});


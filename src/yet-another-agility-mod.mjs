const { settings, characterStorage, patch } = mod.getContext(import.meta);

export class YAAM {
    constructor() {
        this.oldModifiers = new Map();
        this.oldEnemyModifiers = new Map();
        this.oldCombatEffects = new Map();
        this.oldSkillRequirements = new Map();
        this.oldItemCosts = new Map();
        this.oldCurrencyCosts = new Map();
        this.oldItemRewards = new Map();
        this.oldCurrencyRewards = new Map();
        this.oldBaseExperience = new Map();
        this.oldBaseAbyssalExperience = new Map();
        this.oldBaseInterval = new Map();

        this.obstaclesByCategoryRealm = new Map();
        this.pillarsByCategoryRealm = new Map();


        this.obstacleItemCostScalar = 1;
        this.obstacleRemoveItemsOnceBuilt = false;
        this.obstacleRemoveCurrencyOnceBuilt = false;

        this.obstacleCurrencyCostScalar = 1;
        this.obstacleRemoveItemsAlways = false;
        this.obstacleRemoveCurrencyAlways = false;

        this.obstacleRemoveSkillRequirements = false;

        this.obstacleRemoveNegativeModifiers = false;
        this.obstacleRemoveNegativeModifiersRequiresMastery = false;

        this.obstacleEffectScalar = 1;
        this.obstacleCombineEffects = false;
        this.obstacleCombineRewards = false;
        this.obstacleCombineEffectsRequiresBuiltOnce = false;
        this.obstacleCombineEffectsRequiresBuiltOnceToGain = false;
        this.obstacleCombineEffectsRequiresMastery = false;
        this.obstacleCombineEffectsRequiresMasteryToGain = false;
        
        this.pillarItemCostScalar = 1;
        this.pillarRemoveItemsAlways = false;

        this.pillarCurrencyCostScalar = 1;
        this.pillarRemoveCurrencyAlways = false;

        this.pillarEffectScalar = 1;
        this.pillarCombineEffects = false;
    }
    
    setObstacleItemCostScalar(value) {
        this.obstacleItemCostScalar = value;
        this.updateObjects();
    }
    setObstacleRemoveItemsOnceBuilt(value) {
        this.obstacleRemoveItemsOnceBuilt = value;
        this.updateObjects();
    }
    setObstacleCurrencyCostScalar(value) {
        this.obstacleCurrencyCostScalar = value;
        this.updateObjects();
    }
    setObstacleRemoveCurrencyOnceBuilt(value) {
        this.obstacleRemoveCurrencyOnceBuilt = value;
        this.updateObjects();
    }
    setObstacleRemoveItemsAlways(value) {
        this.obstacleRemoveItemsAlways = value;
        this.updateObjects();
    }
    setObstacleRemoveCurrencyAlways(value) {
        this.obstacleRemoveCurrencyAlways = value;
        this.updateObjects();
    }
    setObstacleRemoveSkillRequirements(value) {
        this.obstacleRemoveSkillRequirements = value;
        this.updateObjects();
    }
    setObstacleRemoveNegativeModifiers(value) {
        this.obstacleRemoveNegativeModifiers = value;
        this.updateObjects();
    }
    setObstacleRemoveNegativeModifiersRequiresMastery(value) {
        this.obstacleRemoveNegativeModifiersRequiresMastery = value;
        this.updateObjects();
    }
    setObstacleEffectScalar(value) {
        this.obstacleEffectScalar = value;
        this.updateObjects();
    }
    setObstacleCombineEffects(value) {
        this.obstacleCombineEffects = value;
        this.updateObjects();
    }
    setObstacleCombineRewards(value) {
        this.obstacleCombineRewards = value;
        this.updateObjects();
    }
    setObstacleCombineEffectsRequiresBuiltOnce(value) {
        this.obstacleCombineEffectsRequiresBuiltOnce = value;
        this.updateObjects();
    }
    setObstacleCombineEffectsRequiresBuiltOnceToGain(value) {
        this.obstacleCombineEffectsRequiresBuiltOnceToGain = value;
        this.updateObjects();
    }
    setObstacleCombineEffectsRequiresMastery(value) {
        this.obstacleCombineEffectsRequiresMastery = value;
        this.updateObjects();
    }
    setObstacleCombineEffectsRequiresMasteryToGain(value) {
        this.obstacleCombineEffectsRequiresMasteryToGain = value;
        this.updateObjects();
    }
    setPillarItemCostScalar(value) {
        this.pillarItemCostScalar = value;
        this.updateObjects();
    }
    setPillarRemoveItemsAlways(value) {
        this.pillarRemoveItemsAlways = value;
        this.updateObjects();
    }
    setPillarCurrencyCostScalar(value) {
        this.pillarCurrencyCostScalar = value;
        this.updateObjects();
    }
    setPillarRemoveCurrencyAlways(value) {
        this.pillarRemoveCurrencyAlways = value;
        this.updateObjects();
    }
    setPillarEffectScalar(value) {
        this.pillarEffectScalar = value;
        this.updateObjects();
    }
    setPillarCombineEffects(value) {
        this.pillarCombineEffects = value;
        this.updateObjects();
    }

    loadFromSettings() {
        this.obstacleItemCostScalar = settings.section('Obstacles').get('obstacleItemCostScalar');
        this.obstacleRemoveItemsAlways = settings.section('Obstacles').get('obstacleRemoveItemsAlways');
        this.obstacleRemoveItemsOnceBuilt = settings.section('Obstacles').get('obstacleRemoveItemsOnceBuilt');

        this.obstacleCurrencyCostScalar = settings.section('Obstacles').get('obstacleCurrencyCostScalar');
        this.obstacleRemoveCurrencyAlways = settings.section('Obstacles').get('obstacleRemoveCurrencyAlways');
        this.obstacleRemoveCurrencyOnceBuilt = settings.section('Obstacles').get('obstacleRemoveCurrencyOnceBuilt');

        this.obstacleRemoveSkillRequirements = settings.section('Obstacles').get('obstacleRemoveSkillRequirements');

        this.obstacleRemoveNegativeModifiers = settings.section('Obstacles').get('obstacleRemoveNegativeModifiers');
        this.obstacleRemoveNegativeModifiersRequiresMastery = settings.section('Obstacles').get('obstacleRemoveNegativeModifiersRequiresMastery');

        this.obstacleEffectScalar = settings.section('Obstacles').get('obstacleEffectScalar');
        this.obstacleCombineEffects = settings.section('Obstacles').get('obstacleCombineEffects');
        this.obstacleCombineRewards = settings.section('Obstacles').get('obstacleCombineRewards');
        this.obstacleCombineEffectsRequiresBuiltOnce = settings.section('Obstacles').get('obstacleCombineEffectsRequiresBuiltOnce');
        this.obstacleCombineEffectsRequiresBuiltOnceToGain = settings.section('Obstacles').get('obstacleCombineEffectsRequiresBuiltOnceToGain');
        this.obstacleCombineEffectsRequiresMastery = settings.section('Obstacles').get('obstacleCombineEffectsRequiresMastery');
        this.obstacleCombineEffectsRequiresMasteryToGain = settings.section('Obstacles').get('obstacleCombineEffectsRequiresMasteryToGain');
        
        this.pillarItemCostScalar = settings.section('Pillars').get('pillarItemCostScalar');
        this.pillarRemoveItemsAlways = settings.section('Pillars').get('pillarRemoveItemsAlways');

        this.pillarCurrencyCostScalar = settings.section('Pillars').get('pillarCurrencyCostScalar');
        this.pillarRemoveCurrencyAlways = settings.section('Pillars').get('pillarRemoveCurrencyAlways');

        this.pillarEffectScalar = settings.section('Pillars').get('pillarEffectScalar');
        this.pillarCombineEffects = settings.section('Pillars').get('pillarCombineEffects');
    }

    snapshotAgility() {
        game.agility.actions.forEach(obstacle => {
            let categoryRealm = this.obstaclesByCategoryRealm.get(`${obstacle.realm.id}_${obstacle.category}`);
            if(categoryRealm === undefined)
                categoryRealm = new Set();

            categoryRealm.add(obstacle);
            this.obstaclesByCategoryRealm.set(`${obstacle.realm.id}_${obstacle.category}`, categoryRealm);

            this.snapshotObject(obstacle);
        });
        game.agility.pillars.forEach(pillar => {
            let categoryRealm = this.pillarsByCategoryRealm.get(`${pillar.realm.id}_${pillar.category}`);
            if(categoryRealm === undefined)
                categoryRealm = new Set();

            categoryRealm.add(pillar);
            this.pillarsByCategoryRealm.set(`${pillar.realm.id}_${pillar.category}`, categoryRealm);
            
            this.snapshotObject(pillar);
        });
    }

    snapshotObject(agilityObject) {
        if(agilityObject.modifiers !== undefined)
            this.oldModifiers.set(agilityObject, [...agilityObject.modifiers]);
        if(agilityObject.enemyModifiers !== undefined)
            this.oldEnemyModifiers.set(agilityObject, [...agilityObject.enemyModifiers]);
        if(agilityObject.combatEffects !== undefined)
            this.oldCombatEffects.set(agilityObject, [...agilityObject.combatEffects]);

        if(agilityObject.skillRequirements !== undefined)
            this.oldSkillRequirements.set(agilityObject, [...agilityObject.skillRequirements]);

        if(agilityObject.baseExperience !== undefined)
            this.oldBaseExperience.set(agilityObject, agilityObject.baseExperience);
        if(agilityObject.baseAbyssalExperience !== undefined)
            this.oldBaseAbyssalExperience.set(agilityObject, agilityObject.baseAbyssalExperience);
        if(agilityObject.baseInterval !== undefined)
            this.oldBaseInterval.set(agilityObject, agilityObject.baseInterval);

        if(agilityObject.itemRewards !== undefined)
            this.oldItemRewards.set(agilityObject, [...agilityObject.itemRewards]);
        if(agilityObject.currencyRewards !== undefined)
            this.oldCurrencyRewards.set(agilityObject, [...agilityObject.currencyRewards]);

        if(agilityObject.itemCosts !== undefined)
            this.oldItemCosts.set(agilityObject, [...agilityObject.itemCosts]);
        if(agilityObject.currencyCosts !== undefined)
            this.oldCurrencyCosts.set(agilityObject, [...agilityObject.currencyCosts]);
    }

    updateObjects() {
        game.agility.actions.forEach(obstacle => {
            if(this.oldItemCosts.get(obstacle) !== undefined) {
                if(this.obstacleRemoveItemsAlways && (!this.obstacleRemoveItemsOnceBuilt || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    obstacle.itemCosts = [];
                } else {
                    let itemCosts = [...this.oldItemCosts.get(obstacle)];

                    obstacle.itemCosts = itemCosts.map(itemCost => ({
                        ...itemCost,
                        quantity: itemCost.quantity * this.obstacleItemCostScalar
                    }));
                }
            }

            if(this.oldCurrencyCosts.get(obstacle) !== undefined) {
                if(this.obstacleRemoveCurrencyAlways && (!this.obstacleRemoveCurrencyOnceBuilt || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    obstacle.currencyCosts = [];
                } else {
                    let currencyCosts = [...this.oldCurrencyCosts.get(obstacle)];

                    obstacle.currencyCosts = currencyCosts.map(currencyCost => ({
                        ...currencyCost,
                        quantity: currencyCost.quantity * this.obstacleCurrencyCostScalar
                    }));
                }
            }

            if(this.oldSkillRequirements.get(obstacle) !== undefined) {
                if(this.obstacleRemoveSkillRequirements) {
                    obstacle.skillRequirements = [];
                } else {
                    obstacle.skillRequirements = this.oldSkillRequirements.get(obstacle);
                }
            }

            if(this.oldModifiers.get(obstacle) !== undefined) {
                let obstacleModifiers = this.oldModifiers.get(obstacle);
                let newObstacleModifiers = new ModifierTable();
                
                if(this.obstacleRemoveNegativeModifiers && (!this.obstacleRemoveNegativeModifiersRequiresMastery || game.agility.getMasteryLevel(obstacle) >= 99))
                    obstacleModifiers = obstacleModifiers.filter(modifier => !modifier.isNegative);
                
                newObstacleModifiers.addModifiers(obstacle, obstacleModifiers, this.obstacleEffectScalar, this.obstacleEffectScalar);

                if(this.obstacleCombineEffects &&
                    (!this.obstacleCombineEffectsRequiresMasteryToGain || game.agility.getMasteryLevel(obstacle) >= 99) &&
                    (!this.obstacleCombineEffectsRequiresBuiltOnceToGain || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    let obstaclesToMerge = this.obstaclesByCategoryRealm.get(`${obstacle.realm.id}_${obstacle.category}`);
                    if(obstaclesToMerge !== undefined) {
                        obstaclesToMerge.forEach(obstacleToMerge => {
                            if(this.oldModifiers.get(obstacleToMerge) !== undefined && obstacleToMerge !== obstacle &&
                            (!this.obstacleCombineEffectsRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99) &&
                            (!this.obstacleCombineEffectsRequiresBuiltOnce || game.agility.getObstacleBuildCount(obstacleToMerge) >= 1)) {
                                if(this.obstacleRemoveNegativeModifiers && (!this.obstacleRemoveNegativeModifiersRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99)) {
                                    newObstacleModifiers.addModifiers(obstacle, this.oldModifiers.get(obstacleToMerge).filter(modifier => !modifier.isNegative), this.obstacleEffectScalar, this.obstacleEffectScalar);
                                } else {
                                    newObstacleModifiers.addModifiers(obstacle, this.oldModifiers.get(obstacleToMerge), this.obstacleEffectScalar, this.obstacleEffectScalar);
                                }
                            }
                        });
                    }
                }

                obstacle.modifiers = newObstacleModifiers.toCondensedValues();
            }

            if(this.oldEnemyModifiers.get(obstacle) !== undefined) {
                let obstacleEnemyModifiers = this.oldEnemyModifiers.get(obstacle);
                let newObstacleEnemyModifiers = new ModifierTable();
                
                if(this.obstacleRemoveNegativeModifiers && (!this.obstacleRemoveNegativeModifiersRequiresMastery || game.agility.getMasteryLevel(obstacle) >= 99))
                    obstacleEnemyModifiers = obstacleEnemyModifiers.filter(modifier => modifier.isNegative);
                
                newObstacleEnemyModifiers.addModifiers(obstacle, obstacleEnemyModifiers, this.obstacleEffectScalar, this.obstacleEffectScalar);

                if(this.obstacleCombineEffects &&
                    (!this.obstacleCombineEffectsRequiresMasteryToGain || game.agility.getMasteryLevel(obstacle) >= 99) &&
                    (!this.obstacleCombineEffectsRequiresBuiltOnceToGain || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    let obstaclesToMerge = this.obstaclesByCategoryRealm.get(`${obstacle.realm.id}_${obstacle.category}`);
                    if(obstaclesToMerge !== undefined) {
                        obstaclesToMerge.forEach(obstacleToMerge => {
                            if(this.oldEnemyModifiers.get(obstacleToMerge) !== undefined && obstacleToMerge !== obstacle && 
                               (!this.obstacleCombineEffectsRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99) &&
                               (!this.obstacleCombineEffectsRequiresBuiltOnce || game.agility.getObstacleBuildCount(obstacleToMerge) >= 1)) {
                                if(this.obstacleRemoveNegativeModifiers && (!this.obstacleRemoveNegativeModifiersRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99)) {
                                    newObstacleEnemyModifiers.addModifiers(obstacle, this.oldEnemyModifiers.get(obstacleToMerge).filter(modifier => modifier.isNegative), this.obstacleEffectScalar, this.obstacleEffectScalar);
                                } else {
                                    newObstacleEnemyModifiers.addModifiers(obstacle, this.oldEnemyModifiers.get(obstacleToMerge), this.obstacleEffectScalar, this.obstacleEffectScalar);
                                }
                            }
                        });
                    }
                }

                obstacle.enemyModifiers = newObstacleEnemyModifiers.toCondensedValues();
            }

            if(this.oldCombatEffects.get(obstacle) !== undefined) {
                let obstacleCombatEffects = this.oldCombatEffects.get(obstacle);
                let newObstacleCombatEffects = [];
                
                if(this.obstacleRemoveNegativeModifiers && (!this.obstacleRemoveNegativeModifiersRequiresMastery || game.agility.getMasteryLevel(obstacle) >= 99))
                    obstacleCombatEffects = obstacleCombatEffects.filter(effect => !effect.isNegative);
                
                newObstacleCombatEffects.push(...obstacleCombatEffects);

                if(this.obstacleCombineEffects &&
                    (!this.obstacleCombineEffectsRequiresMasteryToGain || game.agility.getMasteryLevel(obstacle) >= 99) &&
                    (!this.obstacleCombineEffectsRequiresBuiltOnceToGain || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    let obstaclesToMerge = this.obstaclesByCategoryRealm.get(`${obstacle.realm.id}_${obstacle.category}`);
                    if(obstaclesToMerge !== undefined) {
                        obstaclesToMerge.forEach(obstacleToMerge => {
                            if(this.oldCombatEffects.get(obstacleToMerge) !== undefined && obstacleToMerge !== obstacle &&
                            (!this.obstacleCombineEffectsRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99) &&
                            (!this.obstacleCombineEffectsRequiresBuiltOnce || game.agility.getObstacleBuildCount(obstacleToMerge) >= 1)) {
                                if(this.obstacleRemoveNegativeModifiers && (!this.obstacleRemoveNegativeModifiersRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99)) {
                                    newObstacleCombatEffects.push(...this.oldCombatEffects.get(obstacleToMerge).filter(effect => !effect.isNegative));
                                } else {
                                    newObstacleCombatEffects.push(...this.oldCombatEffects.get(obstacleToMerge));
                                }
                            }
                        });
                    }
                }

                obstacle.combatEffects = newObstacleCombatEffects.map(effect => effect.clone(this.obstacleEffectScalar));
            }

            if(this.oldCurrencyRewards.get(obstacle) !== undefined) {
                let obstacleCurrencyRewards = this.oldCurrencyRewards.get(obstacle);
                let newObstacleCurrencyRewards = new Map();
                
                obstacleCurrencyRewards.forEach(currencyReward => {
                    let existingCurrencyReward = newObstacleCurrencyRewards.get(currencyReward.currency);
                    if(existingCurrencyReward === undefined) {
                        existingCurrencyReward = { ...currencyReward };
                    } else {
                        existingCurrencyReward.quantity += currencyReward.quantity;
                    }
                    newObstacleCurrencyRewards.set(currencyReward.currency, existingCurrencyReward);
                });

                if(this.obstacleCombineEffects && this.obstacleCombineRewards &&
                    (!this.obstacleCombineEffectsRequiresMasteryToGain || game.agility.getMasteryLevel(obstacle) >= 99) &&
                    (!this.obstacleCombineEffectsRequiresBuiltOnceToGain || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    let obstaclesToMerge = this.obstaclesByCategoryRealm.get(`${obstacle.realm.id}_${obstacle.category}`);
                    if(obstaclesToMerge !== undefined) {
                        obstaclesToMerge.forEach(obstacleToMerge => {
                            if(this.oldCurrencyRewards.get(obstacleToMerge) !== undefined && obstacleToMerge !== obstacle &&
                            (!this.obstacleCombineEffectsRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99) &&
                            (!this.obstacleCombineEffectsRequiresBuiltOnce || game.agility.getObstacleBuildCount(obstacleToMerge) >= 1)) {
                                let obstacleToMergeCurrencyRewards = this.oldCurrencyRewards.get(obstacleToMerge);
                                obstacleToMergeCurrencyRewards.forEach(currencyReward => {
                                    let existingCurrencyReward = newObstacleCurrencyRewards.get(currencyReward.currency);
                                    if(existingCurrencyReward === undefined) {
                                        existingCurrencyReward = { ...currencyReward };
                                    } else {
                                        existingCurrencyReward.quantity += currencyReward.quantity;
                                    }
                                    newObstacleCurrencyRewards.set(currencyReward.currency, existingCurrencyReward);
                                });
                            }
                        })
                    }
                }

                obstacle.currencyRewards = Array.from(newObstacleCurrencyRewards.values());
            }

            if(this.oldBaseExperience.get(obstacle) !== undefined) {
                let obstacleBaseExperience = this.oldBaseExperience.get(obstacle);
                let newObstacleBaseExperience = 0;
                
                newObstacleBaseExperience += obstacleBaseExperience;

                if(this.obstacleCombineEffects && this.obstacleCombineRewards &&
                    (!this.obstacleCombineEffectsRequiresMasteryToGain || game.agility.getMasteryLevel(obstacle) >= 99) &&
                    (!this.obstacleCombineEffectsRequiresBuiltOnceToGain || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    let obstaclesToMerge = this.obstaclesByCategoryRealm.get(`${obstacle.realm.id}_${obstacle.category}`);
                    if(obstaclesToMerge !== undefined) {
                        obstaclesToMerge.forEach(obstacleToMerge => {
                            if(this.oldBaseExperience.get(obstacleToMerge) !== undefined && obstacleToMerge !== obstacle &&
                            (!this.obstacleCombineEffectsRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99) &&
                            (!this.obstacleCombineEffectsRequiresBuiltOnce || game.agility.getObstacleBuildCount(obstacleToMerge) >= 1)) {
                                let obstacleToMergeBaseExperience = this.oldBaseExperience.get(obstacleToMerge);
                                newObstacleBaseExperience += obstacleToMergeBaseExperience;
                            }
                        })
                    }
                }

                obstacle.baseExperience = newObstacleBaseExperience;
            }

            if(this.oldBaseAbyssalExperience.get(obstacle) !== undefined) {
                let obstacleBaseAbyssalExperience = this.oldBaseAbyssalExperience.get(obstacle);
                let newObstacleBaseAbyssalExperience = 0;
                
                newObstacleBaseAbyssalExperience += obstacleBaseAbyssalExperience;

                if(this.obstacleCombineEffects && this.obstacleCombineRewards &&
                    (!this.obstacleCombineEffectsRequiresMasteryToGain || game.agility.getMasteryLevel(obstacle) >= 99) &&
                    (!this.obstacleCombineEffectsRequiresBuiltOnceToGain || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    let obstaclesToMerge = this.obstaclesByCategoryRealm.get(`${obstacle.realm.id}_${obstacle.category}`);
                    if(obstaclesToMerge !== undefined) {
                        obstaclesToMerge.forEach(obstacleToMerge => {
                            if(this.oldBaseAbyssalExperience.get(obstacleToMerge) !== undefined && obstacleToMerge !== obstacle &&
                            (!this.obstacleCombineEffectsRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99) &&
                            (!this.obstacleCombineEffectsRequiresBuiltOnce || game.agility.getObstacleBuildCount(obstacleToMerge) >= 1)) {
                                let obstacleToMergeBaseAbyssalExperience = this.oldBaseAbyssalExperience.get(obstacleToMerge);
                                newObstacleBaseAbyssalExperience += obstacleToMergeBaseAbyssalExperience;
                            }
                        })
                    }
                }

                obstacle.baseAbyssalExperience = newObstacleBaseAbyssalExperience;
            }

            if(this.oldBaseInterval.get(obstacle) !== undefined) {
                let obstacleBaseInterval = this.oldBaseInterval.get(obstacle);
                let newObstacleBaseInterval = 0;
                
                newObstacleBaseInterval += obstacleBaseInterval;

                if(this.obstacleCombineEffects && this.obstacleCombineRewards && 
                    (!this.obstacleCombineEffectsRequiresMasteryToGain || game.agility.getMasteryLevel(obstacle) >= 99) &&
                    (!this.obstacleCombineEffectsRequiresBuiltOnceToGain || game.agility.getObstacleBuildCount(obstacle) >= 1)) {
                    let obstaclesToMerge = this.obstaclesByCategoryRealm.get(`${obstacle.realm.id}_${obstacle.category}`);
                    if(obstaclesToMerge !== undefined) {
                        obstaclesToMerge.forEach(obstacleToMerge => {
                            if(this.oldBaseInterval.get(obstacleToMerge) !== undefined && obstacleToMerge !== obstacle &&
                            (!this.obstacleCombineEffectsRequiresMastery || game.agility.getMasteryLevel(obstacleToMerge) >= 99) &&
                            (!this.obstacleCombineEffectsRequiresBuiltOnce || game.agility.getObstacleBuildCount(obstacleToMerge) >= 1)) {
                                let obstacleToMergeBaseInterval = this.oldBaseInterval.get(obstacleToMerge);
                                newObstacleBaseInterval += obstacleToMergeBaseInterval;
                            }
                        })
                    }
                }

                obstacle.baseInterval = newObstacleBaseInterval;
            }
        });

        game.agility.pillars.forEach(pillar => {
            if(this.oldItemCosts.get(pillar) !== undefined) {
                if(this.pillarRemoveItemsAlways) {
                    pillar.itemCosts = [];
                } else {
                    let itemCosts = [...this.oldItemCosts.get(pillar)];

                    pillar.itemCosts = itemCosts.map(itemCost => ({
                        ...itemCost,
                        quantity: itemCost.quantity * this.pillarItemCostScalar
                    }));
                    pillar.itemCosts = this.oldItemCosts.get(pillar);
                }
            }

            if(this.oldCurrencyCosts.get(pillar) !== undefined) {
                if(this.pillarRemoveCurrencyAlways) {
                    pillar.currencyCosts = [];
                } else {
                    let currencyCosts = [...this.oldCurrencyCosts.get(pillar)];

                    pillar.currencyCosts = currencyCosts.map(currencyCost => ({
                        ...currencyCost,
                        quantity: currencyCost.quantity * this.pillarCurrencyCostScalar
                    }));
                    pillar.currencyCosts = this.oldCurrencyCosts.get(pillar);
                }
            }

            if(this.oldModifiers.get(pillar) !== undefined) {
                let pillarModifiers = this.oldModifiers.get(pillar);
                let newPillarModifers = new ModifierTable();

                newPillarModifers.addModifiers(pillar, pillarModifiers, this.pillarEffectScalar, this.pillarEffectScalar);
                
                if(this.pillarCombineEffects) {
                    let pillarsToMerge = this.pillarsByCategoryRealm.get(`${pillar.realm.id}_${pillar.category}`);
                    if(pillarsToMerge !== undefined) {
                        pillarsToMerge.forEach(pillarToMerge => {
                            if(this.oldModifiers.get(pillarToMerge) !== undefined && pillarToMerge !== pillar) {
                                newPillarModifers.addModifiers(pillar, this.oldModifiers.get(pillarToMerge), this.pillarEffectScalar, this.pillarEffectScalar);
                            }
                        });
                    }
                }

                pillar.modifiers = newPillarModifers.toCondensedValues();
            }
                
            if(this.oldEnemyModifiers.get(pillar) !== undefined) {
                let pillarEnemyModifiers = this.oldEnemyModifiers.get(pillar);
                let newPillarEnemyModifers = new ModifierTable();
                
                newPillarEnemyModifers.addModifiers(pillar, pillarEnemyModifiers, this.pillarEffectScalar, this.pillarEffectScalar);

                if(this.pillarCombineEffects) {
                    let pillarsToMerge = this.pillarsByCategoryRealm.get(`${pillar.realm.id}_${pillar.category}`);
                    if(pillarsToMerge !== undefined) {
                        pillarsToMerge.forEach(pillarToMerge => {
                            if(this.oldEnemyModifiers.get(pillarToMerge) !== undefined && pillarToMerge !== pillar) {
                                newPillarEnemyModifers.addModifiers(pillar, this.oldEnemyModifiers.get(pillarToMerge), this.pillarEffectScalar, this.pillarEffectScalar);
                            }
                        });
                    }
                }
            
                pillar.enemyModifiers = newPillarEnemyModifers.toCondensedValues();
            }
                
            if(this.oldCombatEffects.get(pillar) !== undefined) {
                let pillarCombatEffects = this.oldCombatEffects.get(pillar);
                let newPillarCombatEffects = [];

                newPillarCombatEffects.push(...pillarCombatEffects);

                if(this.pillarCombineEffects) {
                    let pillarsToMerge = this.pillarsByCategoryRealm.get(`${pillar.realm.id}_${pillar.category}`);
                    if(pillarsToMerge !== undefined) {
                        pillarsToMerge.forEach(pillarToMerge => {
                            if(this.oldCombatEffects.get(pillarToMerge) !== undefined && pillarToMerge !== pillar) {
                                newPillarCombatEffects.push(...this.oldCombatEffects.get(pillarToMerge));
                            }
                        });
                    }
                }

                pillar.combatEffects = newPillarCombatEffects.map(effect => effect.clone(this.pillarEffectScalar));
            }
        });

        game.agility.renderQueue.obstacleModifiers = true;
        game.agility.onObstacleChange();
    }
}
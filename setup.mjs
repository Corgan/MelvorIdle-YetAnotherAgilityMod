export async function setup({ gameData, loadModule, loadScript, onModsLoaded, onCharacterLoaded, onInterfaceReady, patch, settings }) {
    const { YAAM } = await loadModule('src/yet-another-agility-mod.mjs');
    game.yaam = new YAAM();

    settings.section('Obstacles').add([
        {
            name: 'obstacleItemCostScalar',
            type: 'dropdown',
            label: 'Item Costs Scale',
            default: 1,
            options: [
                { display: 'x0.10', value: 0.10 },
                { display: 'x0.25', value: 0.25 },
                { display: 'x0.33', value: 0.33 },
                { display: 'x0.50', value: 0.50 },
                { display: 'x0.66', value: 0.66 },
                { display: 'x0.75', value: 0.75 },
                { display: 'x0.90', value: 0.90 },
                { display: 'x1', value: 1 },
                { display: 'x2', value: 2 },
                { display: 'x3', value: 3 },
                { display: 'x4', value: 4 },
                { display: 'x5', value: 5 },
                { display: 'x10', value: 10 }
            ],
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleItemCostScalar(value);
            }
        },
        {
            name: 'obstacleRemoveItemsAlways',
            type: 'switch',
            label: 'Remove Item Costs',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleRemoveItemsAlways(value);
            }
        },
        {
            name: 'obstacleRemoveItemsOnceBuilt',
            type: 'switch',
            label: 'Require obstacle to be built at least once to remove item cost',
            hint: 'Requires "Remove Item Costs" setting to be enabled.',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleRemoveItemsOnceBuilt(value);
            }
        },
        {
            name: 'obstacleCurrencyCostScalar',
            type: 'dropdown',
            label: 'Currency Costs Scale',
            default: 1,
            options: [
                { display: 'x0.10', value: 0.10 },
                { display: 'x0.25', value: 0.25 },
                { display: 'x0.33', value: 0.33 },
                { display: 'x0.50', value: 0.50 },
                { display: 'x0.66', value: 0.66 },
                { display: 'x0.75', value: 0.75 },
                { display: 'x0.90', value: 0.90 },
                { display: 'x1', value: 1 },
                { display: 'x2', value: 2 },
                { display: 'x3', value: 3 },
                { display: 'x4', value: 4 },
                { display: 'x5', value: 5 },
                { display: 'x10', value: 10 }
            ],
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleCurrencyCostScalar(value);
            }
        },
        {
            name: 'obstacleRemoveCurrencyAlways',
            type: 'switch',
            label: 'Remove Currency Costs',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleRemoveCurrencyAlways(value);
            }
        },
        {
            name: 'obstacleRemoveCurrencyOnceBuilt',
            type: 'switch',
            label: 'Require obstacle to be built at least once to remove currency cost',
            hint: 'Requires "Remove Currency Costs" setting to be enabled.',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleRemoveCurrencyOnceBuilt(value);
            }
        },
        {
            name: 'obstacleRemoveSkillRequirements',
            type: 'switch',
            label: 'Remove Skill Requirements',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleRemoveSkillRequirements(value);
            }
        },
        {
            name: 'obstacleRemoveNegativeModifiers',
            type: 'switch',
            label: 'Remove Negative Effects',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleRemoveNegativeModifiers(value);
            }
        },
        {
            name: 'obstacleRemoveNegativeModifiersRequiresMastery',
            type: 'switch',
            label: 'Require 99 mastery to remove negative effects',
            hint: 'Requires "Remove Negative Effects" setting to be enabled',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleRemoveNegativeModifiersRequiresMastery(value);
            }
        },
        {
            name: 'obstacleEffectScalar',
            type: 'dropdown',
            label: 'Effect Scale',
            default: 1,
            options: [
                { display: 'x0.10', value: 0.10 },
                { display: 'x0.25', value: 0.25 },
                { display: 'x0.33', value: 0.33 },
                { display: 'x0.50', value: 0.50 },
                { display: 'x0.66', value: 0.66 },
                { display: 'x0.75', value: 0.75 },
                { display: 'x0.90', value: 0.90 },
                { display: 'x1', value: 1 },
                { display: 'x2', value: 2 },
                { display: 'x3', value: 3 },
                { display: 'x4', value: 4 },
                { display: 'x5', value: 5 },
                { display: 'x10', value: 10 }
            ],
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleEffectScalar(value);
            }
        },
        {
            name: 'obstacleCombineEffects',
            type: 'switch',
            label: 'Combine Obstacle Effects',
            default: false,
            onChange: function(value, previousValue) {
                console.log(value);
                return game.yaam.setObstacleCombineEffects(value);
            }
        },
        {
            name: 'obstacleCombineEffectsRequiresMastery',
            type: 'switch',
            label: 'Require 99 mastery to provide effects to other obstacles',
            hint: 'Requires "Combine Obstacle Effects" setting to be enabled',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleCombineEffectsRequiresMastery(value);
            }
        },
        {
            name: 'obstacleCombineEffectsRequiresMasteryToGain',
            type: 'switch',
            label: 'Require 99 mastery to gain effects from other obstacles',
            hint: 'Requires "Combine Obstacle Effects" setting to be enabled',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setObstacleCombineEffectsRequiresMasteryToGain(value);
            }
        }
    ]);
    
    settings.section('Pillars').add([
        {
            name: 'pillarItemCostScalar',
            type: 'dropdown',
            label: 'Item Costs Scale',
            default: 1,
            options: [
                { display: 'x0.10', value: 0.10 },
                { display: 'x0.25', value: 0.25 },
                { display: 'x0.33', value: 0.33 },
                { display: 'x0.50', value: 0.50 },
                { display: 'x0.66', value: 0.66 },
                { display: 'x0.75', value: 0.75 },
                { display: 'x0.90', value: 0.90 },
                { display: 'x1', value: 1 },
                { display: 'x2', value: 2 },
                { display: 'x3', value: 3 },
                { display: 'x4', value: 4 },
                { display: 'x5', value: 5 },
                { display: 'x10', value: 10 }
            ],
            onChange: function(value, previousValue) {
                return game.yaam.setPillarItemCostScalar(value);
            }
        },
        {
            name: 'pillarRemoveItemsAlways',
            type: 'switch',
            label: 'Remove Item Costs',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setPillarRemoveItemsAlways(value);
            }
        },
        {
            name: 'pillarCurrencyCostScalar',
            type: 'dropdown',
            label: 'Currency Costs Scale',
            default: 1,
            options: [
                { display: 'x0.10', value: 0.10 },
                { display: 'x0.25', value: 0.25 },
                { display: 'x0.33', value: 0.33 },
                { display: 'x0.50', value: 0.50 },
                { display: 'x0.66', value: 0.66 },
                { display: 'x0.75', value: 0.75 },
                { display: 'x0.90', value: 0.90 },
                { display: 'x1', value: 1 },
                { display: 'x2', value: 2 },
                { display: 'x3', value: 3 },
                { display: 'x4', value: 4 },
                { display: 'x5', value: 5 },
                { display: 'x10', value: 10 }
            ],
            onChange: function(value, previousValue) {
                return game.yaam.setPillarCurrencyCostScalar(value);
            }
        },
        {
            name: 'pillarRemoveCurrencyAlways',
            type: 'switch',
            label: 'Remove Currency Costs',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setPillarRemoveCurrencyAlways(value);
            }
        },
        {
            name: 'pillarEffectScalar',
            type: 'dropdown',
            label: 'Effect Scale',
            default: 1,
            options: [
                { display: 'x0.10', value: 0.10 },
                { display: 'x0.25', value: 0.25 },
                { display: 'x0.33', value: 0.33 },
                { display: 'x0.50', value: 0.50 },
                { display: 'x0.66', value: 0.66 },
                { display: 'x0.75', value: 0.75 },
                { display: 'x0.90', value: 0.90 },
                { display: 'x1', value: 1 },
                { display: 'x2', value: 2 },
                { display: 'x3', value: 3 },
                { display: 'x4', value: 4 },
                { display: 'x5', value: 5 },
                { display: 'x10', value: 10 }
            ],
            onChange: function(value, previousValue) {
                return game.yaam.setPillarEffectScalar(value);
            }
        },
        {
            name: 'pillarCombineEffects',
            type: 'switch',
            label: 'Combine Pillar Effects',
            default: false,
            onChange: function(value, previousValue) {
                return game.yaam.setPillarCombineEffects(value);
            }
        }
    ]);

    patch(Agility, 'buildObstacle').after(function(ret, obstacle) {
        if((game.yaam.obstacleRemoveItemsOnceBuilt || game.yaam.obstacleRemoveCurrencyOnceBuilt) && this.getObstacleBuildCount(obstacle) === 1)
            game.yaam.updateObjects();
    });

    patch(Agility, 'onMasteryLevelUp').after(function(ret, action, oldLevel, newLevel) {
        if((game.yaam.obstacleRemoveNegativeModifiersRequiresMastery ||
            game.yaam.obstacleCombineEffectsRequiresMastery ||
            game.yaam.obstacleCombineEffectsRequiresMasteryToGain) && newLevel >= 99)
            game.yaam.updateObjects();
    });

    onModsLoaded(() => {
        game.yaam.snapshotAgility();
    });

    onCharacterLoaded(() => {
        game.yaam.loadFromSettings();
        game.yaam.updateObjects();
    });
}
/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';

// Add a new ingredient to the shopping list
export function addIngredientToShoppingList(name) {
  return {
    type: ActionTypes.shoppingList.ADD_INGREDIENT,
    payload: {
      name
    }
  };
}

// Remove an ingredient from the shopping list
export function removeIngredientFromShoppingList(id) {
  return {
    type: ActionTypes.shoppingList.REMOVE_INGREDIENT,
    payload: {
      id
    }
  };
}

// Edit an ingredient in the shopping list
export function editIngredientInShoppingList(id, name) {
  return {
    type: ActionTypes.shoppingList.EDIT_INGREDIENT,
    payload: {
      id,
      name
    }
  };
}

// Mark an ingredient as bought in the shopping list
export function markIngredientAsBoughtInShoppingList(id) {
  return {
    type: ActionTypes.shoppingList.MARK_INGREDIENT_AS_BOUGHT,
    payload: {
      id
    }
  };
}

// Mark an ingredient as not bought in the shopping list
export function markIngredientAsNotBoughtInShoppingList(id) {
  return {
    type: ActionTypes.shoppingList.MARK_INGREDIENT_AS_NOT_BOUGHT,
    payload: {
      id
    }
  };
}

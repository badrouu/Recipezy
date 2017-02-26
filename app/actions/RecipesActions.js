/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';

// Add a new recipe to recipes
export function addRecipe(id, data) {
	return {
    type: ActionTypes.recipes.ADD_RECIPE,
    payload: {
      id,
      data
    }
  };
}
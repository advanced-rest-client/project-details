/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/ProjectBase.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement} from 'lit-element';

import {UuidGenerator} from '@advanced-rest-client/uuid-generator/UuidGenerator.js';

export {ProjectBase};

/**
 * Base class for ARC menu elements.
 */
declare class ProjectBase extends LitElement {
  draggableEnabled: any;
  constructor();
  _draggableChanged(value: any): void;

  /**
   * Handles an exception by sending exception details to GA.
   *
   * @param message A message to send.
   */
  _handleException(message: String|null): void;

  /**
   * Prepares dropped request object to be stored in the data store.
   *
   * @returns Copy of the request object
   */
  _prepareDropRequest(request: object|null): object|null;

  /**
   * Adds dropped request to a project.
   *
   * @param project Project model
   * @param request Request model
   * @param opts Append options:
   * - index {Number} - Insert request in the project at this position. Default 0.
   * - forceRequestUpdate {Boolean} - Forces the request to be updated event when order do not change
   */
  _appendProjectRequest(project: object|null, request: object|null, opts: object|null): Promise<any>|null;

  /**
   * Dispatches `process-error` so the application can notify user about the event.
   *
   * @param cause Error object
   * @returns Disaptched custom event
   */
  _dispatchProcessError(cause: Error|null): CustomEvent|null;

  /**
   * Computes value for `dropEffect` property of the `DragEvent`.
   *
   * @returns Either `copy` or `move`.
   */
  _computeProjectDropEffect(e: DragEvent|null): String|null;

  /**
   * Handles logic when drop event is `move` in effect.
   * Removes reference to old project (if exists). It uses `arc-source/project-detail`
   * data from event which should hold project ID.
   *
   * @param request Request object
   * @returns True if the request object changed.
   */
  _handleProjectMoveDrop(e: DragEvent|null, request: object|null): Boolean|null;
}

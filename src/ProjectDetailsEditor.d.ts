/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/ProjectDetailsEditor.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

export {ProjectDetailsEditor};

declare namespace UiElements {

  /**
   * An element to render project details editor.
   */
  class ProjectDetailsEditor extends LitElement {

    /**
     * Name of the project.
     */
    name: string|null|undefined;

    /**
     * The description of the project
     */
    description: string|null|undefined;

    /**
     * Enables compatibility with Anypoint platform
     */
    compatibility: boolean|null|undefined;

    /**
     * Enables Material Design outlined style for inputs.
     */
    outlined: boolean|null|undefined;
    constructor();
    render(): any;

    /**
     * Sends the `cancel-edit` custom event to the parent element.
     */
    cancel(): void;

    /**
     * Sends the `save-edit` custom event to the parent element.
     */
    save(): void;
    _inputHandler(e: any): void;
  }
}

/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
namespace StateJS {
	/**
	 * An abstract class used as the base for the Region and Vertex classes.
	 * An element is a node within the tree structure that represents a composite state machine model.
	 * @class Element
	 */
	export abstract class Element {
		/**
		 * The symbol used to separate element names within a fully qualified name.
		 * Change this static member to create different styles of qualified name generated by the toString method.
		 * @member {string}
		 */
		public static namespaceSeparator = ".";

		/**
		 * The name of the element.
		 * @member {string}
		 */
		public /*readonly*/ name: string;

		/**
		 * The fully qualified name of the element.
		 * @member {string}
		 */
		public /*readonly*/ qualifiedName: string;

		/**
		 * Creates a new instance of the element class.
		 * @param {string} name The name of the element.
		 */
		public constructor(name: string, parent: Element) {
			this.name = name;
			this.qualifiedName = parent ? (parent.qualifiedName + Element.namespaceSeparator + name) : name;
		}

		/**
		 * Returns a the element name as a fully qualified namespace.
		 * @method toString
		 * @returns {string}
		 */
		public toString(): string {
			return this.qualifiedName;
		}
	}
}
/**
 * Another cell:
 *  - Implement a cell type named 'StretchCell(inner, width, height)' that conforms to the table cell interface described
 *  	earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell
 *  	has at least the given 'width' and 'height', even if the inner cell would naturally be smaller
 *
 * Hints:
 *  - You’ll have to store all three constructor arguments in the instance object. The 'minWidth' and 'minHeight' methods
 *  	should call through to the corresponding methods in the inner cell but ensure that no number less than the given
 *  	size is returned (possibly using 'Math.max')
 *  - Don’t forget to add a 'draw' method that simply forwards the call to the inner cell
 */

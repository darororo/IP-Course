<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class CategoryTest extends TestCase
{
    /**
     * Test ID: Category-001
     * Description: Check if we can access the get all categories api
     * Precondition: None
     * Test Steps:
     *  1. Hit the get all categories api
     *  2. Check if the response status is 200
     * Test Data: None
     * Expected Result: The response status should be 200
     * Actual Result:
     * Status:
     * Remark: None
     *
     */

     /**
     * Test ID: Category-002
     * Description: Check if we can access the get a category by its id api
     * Precondition: None
     * Test Steps:
     *  1. Hit the get category by id api
     *  2. Check if the resonse status is 200
     * Test Data: None
     * Expected Result: The response status should be 200
     * Actual Result:
     * Status:
     * Remark: None
     *
     */

     /**
     * Test ID: Category-003
     * Description: Check if we can create a category using the api
     * Precondition: None
     * Test Steps:
     *  1. Hit the POST category api
     *  2. Check if the resonse status is 200
     * Test Data:
     *          1. name: test_category_01
     *          2. name: test_categoryy_02
     * Expected Result: The response status should be 200
     * Actual Result:
     * Status:
     * Remark: None
     *
     */

     /**
     * Test ID: Category-004
     * Description: Check if we can update a category by its id using the api
     * Precondition: None
     * Test Steps:
     *  1. Hit the update category api by sending a PATCH request
     *  2. Check if the resonse status is 200
     * Test Data: name: test_category_01_updated
     * Expected Result: The response status should be 200
     * Actual Result:
     * Status:
     * Remark: None
     *
     */

      /**
     * Test ID: Category-005
     * Description: Check if we can delete a category by its id using the api
     * Precondition: None
     * Test Steps:
     *  1. Hit the delete category api by sending a DELETE request
     *  2. Check if the resonse status is 200
     * Test Data: id: 1,
     * Expected Result: The response status should be 200
     * Actual Result:
     * Status:
     * Remark: None
     *
     */
}

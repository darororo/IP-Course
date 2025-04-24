<?php

namespace Tests\Unit;

use App\Models\Product;
use Tests\TestCase;

class ProductTest extends TestCase
{
     /**
     * Test ID: Product-001
     * Description: Check if we can create a Product using the api
     * Precondition: None
     * Test Steps:
     *  1. Hit the POST Product api
     *  2. Check if the resonse status is 201
     * Test Data:
     *          name: test_product_01
     *          pricing: 100
     *          category_id: 2
     * Expected Result: The response status should be 201
     * Actual Result: The response returned 201
     * Status: PASSED
     * Remark: None
     *
     */
    public function test_if_we_can_access_create_product_api(): void
    {
        $response = $this->post("/api/products", [
            "name" => "test_product_01",
            "pricing" => 100,
            "category_id" => 2,
        ]);

        $response->assertStatus(201)->assertJson([
            "name" => $response['name'],
            "pricing" => $response['pricing'],
            "category_id" => $response['category_id'],
        ]);
    }

        /**
     * Test ID: Product-002
     * Description: Check if we can access the get all products api
     * Precondition: None
     * Test Steps:
     *  1. Hit the get all products api
     *  2. Check if the response status is 200
     * Test Data: None
     * Expected Result: The response status should be 200 and correct numbers of products
     * Actual Result: response 200
     * Status:
     * Remark: None
     *
     */
    public function test_if_we_can_access_get_products_api(): void
    {
        $response = $this->get('/api/products');

        $response->assertStatus(200)->assertJsonCount(Product::count());
    }
      /**
     * Test ID: Product-003
     * Description: Check if we can access the get a Product by its id api
     * Precondition: None
     * Test Steps:
     *  1. Hit the get Product by id api
     *  2. Check if the resonse status is 200
     * Test Data: None
     * Expected Result: The response status should be 200
     * Actual Result: The response returned 200
     * Status: PASSED
     * Remark: None
     *
     */
    public function test_if_we_can_access_get_product_by_id_api() {
        $response = $this->get('/api/products/1');

        $response->assertStatus(200)->assertJson(["id" => 1]);
    }

     /**
     * Test ID: Product-004
     * Description: Check if we can update a Product by its id using the api
     * Precondition: None
     * Test Steps:
     *  1. Hit the update Product api by sending a PATCH response
     *  2. Check if the resonse status is 200
     *  3. Check if the data is updated
     * Test Data:
     *          name: test_product_01_updated
     *          pricing: 999
     *          category_id: 2
     * Expected Result: The response status should be 200, and data is updated
     * Actual Result: The responsed returned 200, and data was updated
     * Status: PASSED
     * Remark: None
     *
     */
    public function test_if_we_can_access_update_product_by_id_api() {
        $response = $this->patch('/api/products/1', [
            "name" => "test_product_01_updated",
            "pricing" => 999,
            "category_id" => 2,
        ]);

        $response->assertStatus(200)->assertJson([
            "id" => $response['id'],
            "name" => $response['name'],
            "pricing" => $response['pricing'],
            "category_id" => $response['category_id'],
        ]);
    }

      /**
     * Test ID: Product-005
     * Description: Check if we can delete a Product by its id using the api
     * Precondition: None
     * Test Steps:
     *  1. Hit the delete Product api by sending a DELETE response
     *  2. Check if the resonse status is 200
     *  3. Get the deleted product
     *  4. Check if resource is empty
     * Test Data: id: 1
     * Expected Result: The response status should be 200 and don't see the deleted product
     * Actual Result: reponse status returned 200
     * Status: PASSED
     * Remark: None
     *
     */
    public function test_if_we_can_delete_product_api() {
        $response = $this->delete('/api/products/1');
        $response->assertStatus(200)->assertJson(['id' => $response['id']]);

        $this
            ->get('/api/products/1')
            ->assertStatus(200)
            ->assertDontSee(["id" => $response['id']]);
    }
}

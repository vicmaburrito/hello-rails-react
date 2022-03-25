require 'test_helper'

class ThingsControllerTest < ActionDispatch::IntegrationTest
    test 'should get index' do
      get things_index_url
      assert_response :success
    end
  end

  test 'should destroy thing' do
    assert_difference('Thing.count', -1) do
      delete thing_url(@thing)
    end

    assert_redirected_to things_url
  end
end

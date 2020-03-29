require "rails_helper"

RSpec.describe Api::V1::UrlsController, type: :controller do
  let(:valid_attributes) do
    {
      long_url: 'http://lospolloshermanos.com/main_combo123',
      short_url: 'http://sho.rt/combo'
    }
  end

  let(:invalid_attributes) do
    { long_url: nil }
  end

  describe 'GET #index' do
    it 'returns a success response' do
      get :index, params: {}
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    it 'returns a success response' do
      url = create(:url)
      get :show, params: { id: url.to_param }

      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new Url' do
        expect do
          post :create, params: { url: valid_attributes }
        end.to change(Url, :count).by(1)
      end

      it 'returns a 201 status code' do
        post :create, params: { url: valid_attributes }
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid params' do
      it 'does creates a new Url' do
        expect do
          post :create, params: { url: invalid_attributes }
        end.to change(Url, :count).by(0)
      end

      it 'returns a 422 status code' do
        post :create, params: { url: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'POST #update' do
    context 'with valid params' do
      let(:new_attributes) do
        {
          long_url: 'http://lospolloshermanos.com/main_combo456',
          short_url: 'http://sho.rt/combo2',
          clicked: 1
        }
      end

      it 'updates the requested url' do
        url = create(:url)
        put :update, params: { id: url.to_param, url: new_attributes }
        url.reload

        expect(url.attributes).to include('long_url' => 'http://lospolloshermanos.com/main_combo456')
        expect(url.attributes).to include('short_url' => 'http://sho.rt/combo2')
      end

      it 'returns a 200 status code' do
        url = create(:url)
        put :update, params: { id: url.to_param, url: valid_attributes }

        expect(response).to have_http_status(:ok)
      end
    end

    context 'with invalid params' do
      it 'returns a 422 status code' do
        url = create(:url)
        put :update, params: { id: url.to_param, url: invalid_attributes }

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested url" do
      url = create(:url)
      expect do
        delete :destroy, params: { id: url.to_param }
      end.to change(Url, :count).by(-1)
    end
  end
end

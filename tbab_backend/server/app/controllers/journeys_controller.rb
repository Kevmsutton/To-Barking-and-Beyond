class JourneysController < ApplicationController

    def index
        @journeys = Journey.all
        render json: @journeys
    end
    
    def show
        @journey = Journey.find(params[:id])
        render json: @journey
    end

    def create
        @journey = Journey.new(journey_name: params[:journey_name], addressOne: params[:addressOne], addressTwo: params[:addressTwo], location_1_lat: params[:location_1_lat], location_1_long: params[:location_1_long], location_2_lat: params[:location_2_lat], location_2_long: params[:location_2_long], user_id: params[:user_id]) 
        if @journey.save
            render json: @journey
        else
            render json: {error: "Unable to create journey."}
        end
    end

    def destroy
        @journey = Journey.find_by(id: params[:id])
        if @journey
        @journey.destroy
        render json: {message: "Journey deleted."}
        else 
            render json: {error: "Journey could not be found"}
        end
    end

end

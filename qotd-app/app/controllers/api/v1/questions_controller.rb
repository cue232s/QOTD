module Api
  module V1
    class QuestionsController < ApplicationController
      def index
        questions = Question.all
        render json: QuestionSerializer.new(questions, options).serialized_json
      end

      def show
        question = Question.find(params[:id])
        render json: QuestionSerializer.new(question, options).serialized_json
      end

      def create
        question = Question.new(question_params)

        if question.save
          render json: QuestionSerializer.new(question).serialized_json
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      def update
        question = Question.find(params[:id])

        if question.update(question_params)
          render json: QuestionSerializer.new(question, options).serialized_json
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      def destroy
        question = Question.find(params[:id])

        if question.destroy
          head :no_content
        else
          render json: { error: question.errors.messages }, status: 422
        end
      end

      private

      def question_params
        p params
        params.require(:question).permit(:qotd, :publish_date)
      end
 
      def options
        @options ||= { includes: %i[] }
      end
    end
  end
end

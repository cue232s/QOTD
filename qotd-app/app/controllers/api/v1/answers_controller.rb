module Api
  module V1
    class AnswersController < ApplicationController
      before_action :get_question

      def index
        answers = @question.answers
        render json: AnswerSerializer.new(answers, options).serialized_json
      end

      def show
        answer = Answer.find(params[:id])
        render json: AnswerSerializer.new(answer, options).serialized_json
      end

      def create
        answer = @question.answers.build({
          answer: answer_params[:answer],
          contact_id: get_contact.id,
        })

        if answer.save
          render json: AnswerSerializer.new(answer).serialized_json
        else
          render json: { error: answer.errors.messages }, status: 422
        end
      end

      def update
        answer = Answer.find(params[:id])

        if answer.update(answer_params)
          render json: AnswerSerializer.new(answer, options).serialized_json
        else
          render json: { error: answer.errors.messages }, status: 422
        end
      end

      def destroy
        answer = Answer.find(params[:id])

        if answer.destroy
          head :no_content
        else
          render json: { error: answer.errors.messages }, status: 422
        end
      end

      private

      def answer_params
        @answer_params ||= params.require(:answer).permit(:question_id, :respondent_phone_number, :answer)
      end

      def get_question
        @question ||= Question.find(params[:question_id])
      end

      def get_contact
        @contact ||= Contact.where(phone_number: answer_params[:respondent_phone_number]).first
      end

      def options
        @options ||= { includes: %i[] }
      end
    end
  end
end

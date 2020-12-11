class BooksController < ApplicationController

  def index
    @books = Book.all
    render json: @books
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book
    end
  end

  def update
    @book = Book.find(params[:id])
    @book.update(title: params[:title], body: params[:body])
    render json: @book
  end

  def destroy
    @book = Book.find(params[:id])
    if @book.destroy
      head :no_content, status: :ok
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :body)
  end
end

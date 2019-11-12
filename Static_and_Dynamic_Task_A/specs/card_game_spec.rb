require('minitest/autorun')
require('minitest/rg')
require_relative('../models/card_game')
require_relative('../models/card')

class CardGameTest < MiniTest::Test

  def test_check_for_ace
    card_game = CardGame.new()
    card = Card.new('ace', 1)
    assert_equal(true, card_game.check_for_ace(card))
  end

  def test_highest_card
    card_game = CardGame.new()
    card1 = Card.new('three', 3)
    card2 = Card.new('two', 2)
    assert_equal(card1, card_game.highest_card(card1, card2))
  end

  def test_cards_total
    card1 = Card.new('three', 3)
    card2 = Card.new('two', 2)
    cards = [card1, card2]
    assert_equal("You have a total of 5", CardGame.cards_total(cards))
  end

end
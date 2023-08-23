require_relative '../practice/woodcutter'

describe Woodcutter do
  # arrange
  let(:in_right_place) { true }
  let(:init_num_of_woods) { 0 }
  let(:woodcutter) { Woodcutter.new(in_right_place, init_num_of_woods) }

  it do
    woodcutter.cut # act
    expect(woodcutter.woods).to be 1 # assert
  end
end
